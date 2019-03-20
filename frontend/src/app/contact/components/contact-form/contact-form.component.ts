import {Component, OnInit} from '@angular/core';
import {Contact} from '../../../shared/models/contact.model';
import {ContactService} from '../../../shared/services/contact.service';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  contactMessage: Contact = new Contact();

  constructor(private contactService: ContactService) {
  }

  ngOnInit() {
  }

  onSendClicked() {
    this.contactService.sendMessage(this.contactMessage);

    this.resetContactMessage();
  }

  private resetContactMessage() {
    this.contactMessage = new Contact();
  }

}
