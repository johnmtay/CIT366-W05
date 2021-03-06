import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../contact.model';
import { ContactService } from '../contact.service';

@Component({
  selector: 'cms-contact-detail',
  templateUrl: './contacts-detail.component.html',
  styleUrls: ['./contacts-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
 @Input() contact:Contact
  
  constructor(private contactService: ContactService) {  
  }

  ngOnInit() {
}
onSelected() {
  this.contactService.selectedContactEvent.emit(this.contact);
  }
}
