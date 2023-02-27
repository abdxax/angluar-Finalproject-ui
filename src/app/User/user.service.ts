import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getWorks(tokien:any):Observable<Object>{
    let auth="Bearer "+tokien;
    let head={
      Authorization:auth
    }
    return  this.http.get("http://localhost:8080/api/v1/user/work",{ headers: head })

  }

}
