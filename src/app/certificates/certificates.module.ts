import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CertificatesComponent } from './certificates.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';

const routes: Routes = [
  {path: '', component: CertificatesComponent}
];


@NgModule({
  declarations: [CertificatesComponent],
  imports: [
    CommonModule,
    CarouselModule.forRoot(),
    RouterModule.forChild(routes)
  ]
})
export class CertificatesModule { }
