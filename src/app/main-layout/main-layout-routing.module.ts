import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './main-layout.component';
import { HomeComponent } from '../home/home.component';
import { NotFoundComponent } from '../not-found/not-found.component';

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent},
      {path: 'skills', loadChildren: 'src/app/my-skills/my-skills.module#MySkillsModule'},
      {path: 'courses', loadChildren: 'src/app/courses/courses.module#CoursesModule'},
      {path: 'certificates', loadChildren: 'src/app/certificates/certificates.module#CertificatesModule'},
      {path: 'contacts', loadChildren: 'src/app/contacts/contacts.module#ContactsModule'}
    ]
  },
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainLayoutRoutingModule { }
