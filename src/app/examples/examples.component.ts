import { Component, OnInit } from '@angular/core';
import { Certificate, CertificatesService } from '../shared/services/certificates.service';


@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss']
})
export class ExamplesComponent implements OnInit {
  certificates: Certificate [];

  constructor( private certificatesService: CertificatesService ) { }

  ngOnInit() {
    this.certificates = this.certificatesService.getAll();
  }
}
