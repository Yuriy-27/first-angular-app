import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CoursesService, Courses } from 'src/app/shared/services/courses.service';
import { SubscriptionsManager } from 'src/app/shared/base/subscriptions-manager';

@Component({
  selector: 'app-courses-details',
  templateUrl: './courses-details.component.html',
  styleUrls: ['./courses-details.component.scss']
})
export class CoursesDetailsComponent extends SubscriptionsManager implements OnInit {
  activeCourse: Courses;
  constructor(private coursesService: CoursesService, private router: Router, private route: ActivatedRoute) {
    super();
  }

  ngOnInit() {
    // tslint:disable-next-line:no-string-literal
    this.subs = this.route.params.subscribe(params => {
      this.activeCourse = this.coursesService.getOne(+params.id);
    });
  }
}
