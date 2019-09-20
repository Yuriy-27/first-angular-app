import { Component, OnInit } from '@angular/core';
import { ContactsInfo, ContactsService } from '../shared/services/contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  contacts: ContactsInfo [];

  constructor( private contactsService: ContactsService) { }

  ngOnInit() {
    this.contacts = this.contactsService.getAll();
  }

}
