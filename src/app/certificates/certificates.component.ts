import { Component, OnInit } from '@angular/core';
import { Certificate } from '../shared/classes/certificate';



const MyCertificate: Certificate[] = [
  new Certificate (1, 'HTML5&CSS3 Starter', 'assets/images/Certificates/html&cssstarter.jpg'),
  new Certificate (2, 'Javascript Essential', 'assets/images/Certificates/js-essential.jpg'),
  new Certificate (3, 'Javascript Advanced', 'assets/images/Certificates/jsAdv.jpg'),
  new Certificate (4, 'HTML5&CSS3 Advanced', 'assets/images/Certificates/html&cssAdv.jpg'),
  new Certificate (5, 'Bootstrap 4', 'assets/images/Certificates/bootstrap4.jpg'),
  new Certificate (6, 'Typescript Fundamentals', 'assets/images/Certificates/typescript.jpg'),
  new Certificate (7, 'Angular Essential', 'assets/images/Certificates/angular.jpg'),
  new Certificate (8, 'Frontend Developer Diploma', 'assets/images/Certificates/diploma.jpg')
];




@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss']
})
export class CertificatesComponent implements OnInit {
  certificates: Certificate [] = MyCertificate;
  currentCertificate: Certificate;

  constructor() {
    this.currentCertificate = this.certificates[0];
  }

  ngOnInit() {
    // this.certificates = this.certificatesService.getAll();
  }

  changeCertificate(param) {
    const index = this.certificates.findIndex(step => step === this.currentCertificate);
    if (this.currentCertificate != null && this.currentCertificate !== undefined) {
      this.currentCertificate = this.certificates[index + param];
    }
    if (param === -1 && index === 0) {
      this.currentCertificate = this.certificates[0];
    }
    if (param === +1 && index === this.certificates.length - 1) {
      this.currentCertificate = this.certificates[this.certificates.length - 1];
    }
  }
}
