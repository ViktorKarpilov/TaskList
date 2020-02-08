import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person }     from '../Models/Person';
import { strict } from 'assert';
import { getBaseUrl } from 'src/main';

@Injectable({
  providedIn: 'root'
})
export class IdentityService {

  constructor(private http:HttpClient) { }
  base_url: string;
  UserRegistarion(user:Person){
    this.base_url = getBaseUrl();
    console.log(user);
    return this.http.post(this.base_url +"api/userRegistration",user);
  }
}
