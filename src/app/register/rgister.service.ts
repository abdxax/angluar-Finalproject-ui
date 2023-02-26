import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { User } from '../type/User';

@Injectable({
  providedIn: 'root'
})
export class RgisterService {

  constructor(private http:HttpClient) { }


  registerForm(user:any):Observable<Object>{

    return this.http.post("http://localhost:8080/api/v1/auth/register",user,{responseType: 'json'});
  }


}
