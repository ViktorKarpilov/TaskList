import { Component, OnInit } from '@angular/core';
import {Person} from '../../../../Models/Person';
import {NgForm} from '@angular/forms';
import { from } from 'rxjs';
import { IdentityService} from '../../../identity-service.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [IdentityService],
})
export class RegistrationComponent implements OnInit {
  user: Person = new Person();
  constructor(private httpService:IdentityService) {
   }

  submitForm(){
    this.httpService.UserRegistarion(this.user).subscribe(a => console.log(a.toString()));
  }
  ngOnInit() {
  }

}
