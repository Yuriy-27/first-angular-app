import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './main-layout.component';
import { HomeComponent } from '../home/home.component';
import { MySkillsComponent } from '../my-skills/my-skills.component';
import { CoursesComponent } from '../courses/courses.component';
import { ExamplesComponent } from '../examples/examples.component';
import { ContactsComponent } from '../contacts/contacts.component';
import { NotFoundComponent } from '../not-found/not-found.component';


const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent},
      {path: 'skills', component: MySkillsComponent},
      {path: 'education', component: CoursesComponent},
      {path: 'examples', component: ExamplesComponent},
      {path: 'contacts', component: ContactsComponent}
    ]
  },
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainLayoutRoutingModule { }
