
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { InstructorDetailComponent } from './instructor-detail/instructor-detail.component';
import { Ng2GoogleChartsModule, GoogleChartComponent} from 'ng2-google-charts';
import { CreditAuditComponent } from './credit-audit/credit-audit.component';
import {ExpandableListModule} from 'angular2-expandable-list';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    InstructorDetailComponent,
    CreditAuditComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    Ng2GoogleChartsModule,
    ExpandableListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
