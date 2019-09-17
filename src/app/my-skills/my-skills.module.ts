import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MySkillsComponent } from './my-skills.component';


const routes: Routes = [
  {path: '', component: MySkillsComponent}
];

@NgModule({
  declarations: [MySkillsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MySkillsModule { }
