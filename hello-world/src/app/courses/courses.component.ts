import { CoursesService } from './courses.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  template: `
      <h2>{{ title }}</h2>
      <ul>
        <li *ngFor="let course of courses">
          {{ course }}
        </li>
      </ul>
    `,
  // templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  title = 'List of courses';
  courses;

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }

  ngOnInit(): void {
  }

  // Logic for calling HTTP service
  // Component ----> HTTP Endpoint

  // We should not implement HTTP Endpoint inside a component:
  // 1. Write Unittest -> depend on this live HTTP Endpoint
  // 2. There is somewhere else in other class using HTTP Endpoint => consuming HTTP service in multiple place => not good
  // 3. Component should not include any logic other than the presentation logic
  // So, we should declare other class called a service, then we can resuse this class in multiple places

}
