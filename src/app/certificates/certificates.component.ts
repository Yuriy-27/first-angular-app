import { Component, OnInit } from '@angular/core';
import { Certificate, CertificatesService } from '../shared/services/certificates.service';


@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss']
})
export class CertificatesComponent implements OnInit {
  certificates: Certificate [];

  constructor( private certificatesService: CertificatesService ) { }

  ngOnInit() {
    this.certificates = this.certificatesService.getAll();
  }
}
