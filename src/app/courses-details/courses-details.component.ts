import { Component, OnInit } from '@angular/core';
import { Courses, CoursesService } from '../shared/services/courses.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses-details',
  templateUrl: './courses-details.component.html',
  styleUrls: ['./courses-details.component.scss']
})
export class CoursesDetailsComponent implements OnInit {
  activeCourse: Courses;
  constructor(private coursesService: CoursesService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    // tslint:disable-next-line:no-string-literal
    const id = +this.route.snapshot.params['id'];
    this.activeCourse = this.coursesService.getOne(id);
    }
}
