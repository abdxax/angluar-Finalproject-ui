import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 basUrl="http://localhost:8080/api/v1/user/"
  constructor(private hhtp:HttpClient) { }

  getprofile(tokien:any):Observable<Object>{
    let auth="Bearer "+tokien;
    let heade={
     Authorization:auth
    }
 return this.hhtp.get("http://localhost:8080/api/v1/user/profile/getProfile",{headers:heade})
  }

  addProfile(profile:any,tokien:any):Observable<Object>{
    let auth="Bearer "+tokien;
    let heade={
     Authorization:auth
    }
   return this.hhtp.post("http://localhost:8080/api/v1/user/profile/addprofile",profile,{headers:heade})
  }
}
