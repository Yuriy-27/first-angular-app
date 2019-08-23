import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses.component';
import { CoursesDetailsComponent } from '../courses-details/courses-details.component';

const routes: Routes = [
  {path: '', component: CoursesComponent, children: [
    {path: ':id', component: CoursesDetailsComponent}
  ]}
];


@NgModule({
  declarations: [CoursesComponent, CoursesDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class CoursesModule { }
