import { Component, OnInit } from '@angular/core';
import { SocialLinks, SocialLinksService } from '../shared/services/socialLinks.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  links: SocialLinks[];

  constructor(private socialLinksService: SocialLinksService) { }

  ngOnInit() {
    this.links = this.socialLinksService.getAll();
  }
}
