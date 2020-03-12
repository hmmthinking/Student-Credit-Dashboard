import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public router: Router) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) { // once navigation to the new router ends
        this.closeNav(); // close the nav bar automatically
      }
    })
   }

  ngOnInit() {
  }

  openNav() {
    document.getElementById("sidenav").style.width = "250px";
  }

  closeNav() {
    document.getElementById("sidenav").style.width = "0";
  }
}
