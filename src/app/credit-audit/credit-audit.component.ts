import { Component, OnInit } from '@angular/core';
import { EventsService } from '../services/events.service';
import { Subscription } from 'rxjs';
import { Class } from '../models/class';
import { Student } from '../models/student';

@Component({
  selector: 'app-credit-audit',
  templateUrl: './credit-audit.component.html',
  styleUrls: ['./credit-audit.component.scss']
})
export class CreditAuditComponent implements OnInit {

  userLoaded: Promise<boolean>;

  classSubscription: Subscription;
  userSubscription: Subscription;
  classList: Array<Class> = new Array <Class>();
  expanded = true;
  user = new Student();

  constructor(private eventService: EventsService) { }

  ngOnInit() {
    this.getCurrentUser();
    this.getClasses();
    console.log(this.classList);
  }


  // if I get time to, i'll use these classes to populate the credit audit page
  getClasses() {
    this.eventService.getClasses().subscribe(classes => {
        if (classes) {
          this.classList = classes;
        }
    });
  }

  getCurrentUser() {
    this.eventService.user$.subscribe((user) => { // subscribes to the user behavior subject in the event service
      this.user = user; // assigns the user that is grabbed from the event service
      if (user) {
        this.userLoaded = Promise.resolve(true); // shows that the user is loaded so that the page can display
      }
    });
  }

  checkIfClassTaken(name: string) {
    // if a class is found that is marked as complete and has a matching name
    if (this.user.classes.some(c => (c.courseName === name) && (c.classStatus === 2))) {
      return true; // *ngIf checks this to display a check
    } else {
      return false; // *ngIf won't display a check
    }
  }

  checkIfClassInProgress(name: string) {
    // if a class is found that is marked as in progress and has a matching name
    if (this.user.classes.some(c => (c.courseName === name) && (c.classStatus === 1))) {
      return true;
    } else {
      return false;
    }
  }
}
