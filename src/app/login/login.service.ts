import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  login(user:any):Observable<Object>{
    return this.http.post("http://localhost:8080/api/v1/auth/login",user);
  }
}
