import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ExamplesComponent } from './certificates.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';

const routes: Routes = [
  {path: '', component: ExamplesComponent}
];


@NgModule({
  declarations: [ExamplesComponent],
  imports: [
    CommonModule,
    CarouselModule.forRoot(),
    RouterModule.forChild(routes)
  ]
})
export class ExamplesModule { }
