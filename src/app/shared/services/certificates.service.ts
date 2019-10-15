import { Injectable } from '@angular/core';

export interface Certificate {
    id: number;
    imgUrl: string;
}

@Injectable({
    providedIn: 'root'
})

export class CertificatesService {
    private certificates: Certificate [] = [
        {
            id: 1,
            imgUrl: 'assets/images/Certificates/html&cssstarter.jpg'
        },
        {
            id: 2,
            imgUrl: 'assets/images/Certificates/js-essential.jpg'
        },
        {
            id: 3,
            imgUrl: 'assets/images/Certificates/jsAdv.jpg'
        },
        {
            id: 4,
            imgUrl: 'assets/images/Certificates/html&cssAdv.jpg'
        },
        {
            id: 5,
            imgUrl: 'assets/images/Certificates/bootstrap4.jpg'
        },
        {
            id: 6,
            imgUrl: 'assets/images/Certificates/typescript.jpg'
        },
        {
            id: 7,
            imgUrl: 'assets/images/Certificates/angular.jpg'
        },
        {
            id: 1,
            imgUrl: 'assets/images/Certificates/diploma.jpg'
        }
    ];

    getAll(): Certificate[] {
        return this.certificates;
    }
}
