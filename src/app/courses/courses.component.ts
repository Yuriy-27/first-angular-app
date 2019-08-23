import { Component, OnInit } from '@angular/core';
import { Courses, CoursesService } from '../shared/services/courses.service';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  coursesList: Courses[];
  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
    this.coursesList = this.coursesService.getAll();
  }
}
