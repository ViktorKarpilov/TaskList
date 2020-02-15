import { Component, OnInit } from '@angular/core';
import { IdentityService } from 'src/app/identity-service.service';
import { UserLoginModel } from '../../../Models/UserLoginModel';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new UserLoginModel();
  formSubmit(){
    this.httpService.UserLogin(this.user).subscribe(res => console.log(res.toString()));
  }

  constructor(private httpService:IdentityService) { }

  ngOnInit() {
  }

}
