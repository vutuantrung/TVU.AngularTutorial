import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  template: '<h2>{{ getTitle() }}</h2>',
  // templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  title = 'List of courses';

  constructor() { }

  ngOnInit(): void {
  }

  getTitle(){
    return this.title;
  }

}
