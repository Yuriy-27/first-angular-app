import { Injectable } from '@angular/core';

export interface MySkills {
  title: string;
  result: string;
}

@Injectable({
  providedIn: 'root'
})
export class MySkillsService {
  private contactsInfo: MySkills [] = [
    {
        title: 'HTML5 & CSS3 Starter',
        result: '94%'
    },
    {
        title: 'Javascript Essential',
        result: '94%'
    },
    {
        title: 'Javascript Advanced',
        result: '80%'
    },
    {
        title: 'Twitter Bootstrap 4',
        result: '96%'
    },
    {
        title: 'HTML5 & CSS3 Advanced',
        result: '93%'
    },
    {
        title: 'Typescript Fundamentals',
        result: '98%'
    },
    {
        title: 'Angular Essential',
        result: '80%'
    }
  ];

  getAll(): MySkills[] {
    return this.contactsInfo;
  }
}
