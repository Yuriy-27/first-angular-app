import { Component, OnInit } from '@angular/core';
import { SocialLinks, SocialLinksService } from '../shared/services/socialLinks.service';

export interface RouterLinks {
  path: string;
  title: string;
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  links: SocialLinks[];
  routerLinks: RouterLinks[] = [
    {
      path: '/home',
      title: 'Home'
    },
    {
      path: '/skills',
      title: 'Skills'
    },
    {
      path: '/courses',
      title: 'Courses'
    },
    {
      path: '/certificates',
      title: 'Certificates'
    },
    {
      path: '/contacts',
      title: 'Contacts'
    }
  ];

  constructor(private socialLinksService: SocialLinksService) { }

  ngOnInit() {
    this.links = this.socialLinksService.getAll();
  }
}
