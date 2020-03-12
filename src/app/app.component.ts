import { Component, OnInit } from '@angular/core';
import { EventsService } from './services/events.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Student Dashboard';

  constructor(public eventsService: EventsService) { }

  ngOnInit() {
    this.eventsService.getUser();
  }
}
