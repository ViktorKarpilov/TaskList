import { Component, OnInit } from '@angular/core';
import {Person} from '../../../../Models/Person';
import {NgForm} from '@angular/forms';
import { from } from 'rxjs';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user: Person = new Person();
  constructor() {
   }

  submitForm(form:NgForm){
    
  }
  ngOnInit() {
  }

}
