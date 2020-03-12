import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';
import {map} from 'rxjs/operators';
import { Student } from '../models/student';
import { Class } from '../models/class';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  // the behavior subjects that are private to our event service
  private _user: BehaviorSubject<Student> = new BehaviorSubject<Student>(null);
  // the behavior subjects being cast as observables
  public user$ = this._user.asObservable();

  url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getUser() {
    this.http.get<Student>(this.url + '/user/1').subscribe(user => {
        this._user.next(user); // pushes the current user to the behavior subject
        console.log(user);
    });
  }

  getClasses(): Observable<any> {
    return this.http.get<any>(this.url + '/class_list').pipe(); // returns the total list of CS classes
  }

  getInstructor(id: number): Observable<any> {
    return this.http.get<any>(this.url + `/instructor_list?id=${id}`).pipe(); // returns the instructor that matches the id value
  }
}
