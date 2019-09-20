import { Component, OnInit } from '@angular/core';
import { MySkills, MySkillsService } from '../shared/services/my-skills.service';


@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss']
})
export class MySkillsComponent implements OnInit {
  skills: MySkills [];

  constructor( private mySkillsService: MySkillsService) { }

  ngOnInit() {
    this.skills = this.mySkillsService.getAll();
  }

}
