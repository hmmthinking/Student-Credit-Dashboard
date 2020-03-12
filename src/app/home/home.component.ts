import { Component, OnInit } from '@angular/core';
import { EventsService } from '../services/events.service';
import { Student } from '../models/student';
import { Class } from '../models/class';
import { BehaviorSubject } from 'rxjs';
import { GoogleChartInterface } from 'ng2-google-charts/google-charts-interfaces';
import { ChartReadyEvent, ChartErrorEvent } from 'ng2-google-charts';
// for google charts documentation, see https://www.devrandom.it/software/ng2-google-charts/

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userLoaded: Promise<boolean>;
  // tslint:disable-next-line: variable-name
  _chartReady: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  chartReady$ = this._chartReady.asObservable();

  creditsCompleted = 0;
  creditsInProgress = 0;
  creditsLeft = 0;

  user: Student; // this variable holds the current student
  classList: Array<Class> = new Array<Class>(); // initializes a new array of to hold the list of classes
  currentClassList: Array<Class> = new Array<Class>();
  tableHead = ['Class Number', 'Class Name', 'Instructor', 'Hours', 'Days', 'Time'];

  public pieChart: GoogleChartInterface = {
    chartType: 'PieChart',
    dataTable: [
      ['Task', 'Total Credits'],
      ['Completed', this.creditsCompleted],
      ['In Progress', this.creditsInProgress],
      ['Remaining', this.creditsLeft]
    ],
    options: {
      title: 'Credit Breakdown',
      pieHole: 0.4,
      pieSliceTextStyle: {
        color: 'black'
      },
      fontName: 'Roboto',
      backgroundColor: {
        fill: 'transparent'
      }
    },
  };

  constructor(public eventsService: EventsService) { }

  ngOnInit() {
    this.getUser(); // upon loading the home component, we get the current user
  }

  // gets user from our mock API
  getUser() {
    this.eventsService.user$.subscribe((user) => {
      this.user = user; // assigns the data grabbed from the mock api to the user
      if (user) {
        this.calculateUserCredits();
        console.log(user);
        this.userLoaded = Promise.resolve(true);
      }
    });
  }

  calculateUserCredits() {
    // calculate classes completed
    for (const oneClass of this.user.classes) { // loops through each class that the user has stored
      if (oneClass.classStatus === 2) { // if the class status is completed
        this.creditsCompleted += oneClass.creditHours;
        console.log(`${oneClass.creditHours} hours added to credits completed`);
      } else if (oneClass.classStatus === 1) { // if the class status is in progress
        this.creditsInProgress += oneClass.creditHours;
        console.log(`${oneClass.creditHours} hours added to credits in progress`);
      }
    }
    // after calculating those, use the values to compute the credits left based on how many credits are required
    this.creditsLeft = (this.user.totalCreditsRequired - (this.creditsCompleted + this.creditsInProgress));
    // when the chart is ready, get the calculated user credits and redraw the chart
    this.chartReady$.subscribe(value => {
      if (value === true) { // if chart ready
        console.log('drawing...: ' + this.creditsCompleted + ' ' + this.creditsInProgress + ' ' + this.creditsLeft);
        this.pieChart.component.data.dataTable = [ // we reassign the chart data
          ['Task', 'Total Credits'],
          ['Completed', this.creditsCompleted],
          ['In Progress', this.creditsInProgress],
          ['Remaining', this.creditsLeft]
        ];
        this.pieChart.component.draw(); // we draw the chart (done in here to make sure that we can access chart component)
      }
    });
  }

  // TODO: make the chart responsive
  onResize(event) {

  }

  // google charts stuff
  public ready(event: ChartReadyEvent) { // stuff to do when chart is ready
    console.log('chart ready!');
    this._chartReady.next(true); // when the chart is ready, tell the BS
  }

  public error(event: ChartErrorEvent) { // stuff to do when chart returns error
    console.log(event.id);
    console.log(event.message);
    console.log(event.detailedMessage);
  }
}
