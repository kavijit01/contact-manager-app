import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css']
})
export class CreateContactComponent implements OnInit {

  submitted = true;
  firstName!: string;
  lastName!: number;
  constructor() { }

  ngOnInit(): void {
  }

  newContact(): void {
    this.submitted = false;
    
  }

}
