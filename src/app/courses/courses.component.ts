import { Component, OnInit } from '@angular/core';
import { Courses, CoursesService } from '../shared/services/courses.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { SubscriptionsManager } from '../shared/base/subscriptions-manager';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent extends SubscriptionsManager implements OnInit {
  coursesList: Courses[];
  courseSelected: boolean;
  constructor(private coursesService: CoursesService, private router: Router, private route: ActivatedRoute) {
    super();
  }


  ngOnInit() {
    this.coursesList = this.coursesService.getAll();

    this.subs = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.courseSelected = !!(this.route.firstChild.snapshot.params.id as string);
      }
    });
  }
}
