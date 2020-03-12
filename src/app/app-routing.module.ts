import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InstructorDetailComponent } from './instructor-detail/instructor-detail.component';
import { CreditAuditComponent } from './credit-audit/credit-audit.component';

const routes: Routes = [
  // {path: '', component: }
  {path: '', redirectTo: '/home', pathMatch: 'full'}, // if the path is empty, redirects to home
  {path: 'home', component: HomeComponent}, // /home takes us to the home component
  {path: 'instructor', component: InstructorDetailComponent}, // /instructor takes us to instructor Details for a particular instructor
  {path: 'audit', component: CreditAuditComponent} // /audit takes us to the credit audit page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }