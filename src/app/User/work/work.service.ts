import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WorkService {

  constructor(private http:HttpClient) { }

  getWorks(tokien:any):Observable<Object>{
    let auth="Bearer "+tokien;
    let head={
      Authorization:auth
    }
    return  this.http.get("http://localhost:8080/api/v1/user/work",{ headers: head })

  }

  getWork(id: bigint, token:any) {
    let auth="Bearer "+token;
    let head={
      Authorization:auth
    }
    return  this.http.get("http://localhost:8080/api/v1/user/work/"+id,{ headers: head })
  }

  getImage(filePath: string, token:any) {
    let auth="Bearer "+token;
    let head={
      Authorization:auth,
      Accept:"image/png"
    }
    let response = this.http.get("http://localhost:8080/api/v1/user/storage",
      {
      headers: head,
      params:{
        path: filePath }
      }
    );
    console.log(response)
    return response;
  }
}
