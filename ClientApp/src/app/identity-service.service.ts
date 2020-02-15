import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person }     from '../Models/Person';
import { UserLoginModel } from '../Models/UserLoginModel';
import { getBaseUrl } from 'src/main';


@Injectable({
  providedIn: 'root'
})
export class IdentityService {

  constructor(private http:HttpClient) {
    this.base_url= getBaseUrl();
   }
  base_url: string;
  UserRegistarion(user:Person){
    return this.http.post(this.base_url +"api/userRegistration",user);
  }
  UserLogin(user:UserLoginModel){
    return this.http.post(this.base_url+"api/userLogin",user);
  }
}
