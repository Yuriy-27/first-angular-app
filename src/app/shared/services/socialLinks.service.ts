import { Injectable } from '@angular/core';

export interface SocialLinks {
    link: string;
    iconClass: string;
}

@Injectable({
    providedIn: 'root'
})
export class SocialLinksService {
    private socialLinks: SocialLinks[] = [
        {
            link: 'https://www.linkedin.com/in/yuriyshchebetun/',
            iconClass: 'fab fa-linkedin-in'
        },
        {
            link: 'https://github.com/Yuriy-27',
            iconClass: 'fab fa-github'
        },
        {
            link: 'https://t.me/YuriyShchebetun',
            iconClass: 'fab fa-telegram-plane'
        },
        {
            link: 'skype:yuriyshchebetun?userinfo',
            iconClass: 'fab fa-skype'
        }
    ];

    getAll(): SocialLinks[] {
        return this.socialLinks;
    }
}
