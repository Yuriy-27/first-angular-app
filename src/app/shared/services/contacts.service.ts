import { Injectable } from '@angular/core';

export interface ContactsInfo {
  class: string;
  title: string;
  content: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  private contactsInfo: ContactsInfo [] = [
    {
      class: 'fas fa-user-alt',
      title: 'Full name',
      content: 'Yuriy Shchebetun'
    },
    {
      class: 'fas fa-phone-square',
      title: 'Phone number',
      content: '+38 (093) 722-34-61'
    },
    {
      class: 'fas fa-at',
      title: 'Email',
      content: 'yuriyshchebetun@gmail.com'
    },
    {
      class: 'fab fa-facebook',
      title: 'Facebook',
      content: 'https://www.facebook.com/YuriyShchebetun'
    },
    {
      class: 'fab fa-skype',
      title: 'Skype',
      content: 'yuriyshchebetun'
    },
    {
      class: 'fab fa-linkedin-in',
      title: 'LinkedIn',
      content: 'www.linkedin.com/in/yuriyshchebetun'
    }
  ];

  getAll(): ContactsInfo[] {
    return this.contactsInfo;
  }
}
