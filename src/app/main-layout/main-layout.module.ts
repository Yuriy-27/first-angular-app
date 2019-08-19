import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutRoutingModule } from './main-layout-routing.module';
import { MainLayoutComponent } from './main-layout.component';
import { HomeComponent } from '../home/home.component';
import { CoursesComponent } from '../courses/courses.component';
import { MySkillsComponent } from '../my-skills/my-skills.component';
import { ExamplesComponent } from '../examples/examples.component';
import { ContactsComponent } from '../contacts/contacts.component';
import { HeaderComponent } from '../header/header.component';
import { AsideComponent } from '../aside/aside.component';
import { FooterComponent } from '../footer/footer.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { MySkillsModule } from '../my-skills/my-skills.module';
import { CoursesModule } from '../courses/courses.module';
import { ExamplesModule } from '../examples/examples.module';
import { ContactsModule } from '../contacts/contacts.module';


@NgModule({
  declarations: [
    MainLayoutComponent,
    HomeComponent,
    HeaderComponent,
    AsideComponent,
    FooterComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    MainLayoutRoutingModule,
    MySkillsModule,
    CoursesModule,
    ExamplesModule,
    ContactsModule
  ]
})
export class MainLayoutModule { }
