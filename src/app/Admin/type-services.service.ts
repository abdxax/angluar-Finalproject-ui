import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TypeServicesService {
   baseUrl="http://localhost:8080/api/v1/admin/serviceType/"
   //tokien:any="";

  constructor(private http:HttpClient) {

  }

  getServices(tokien:any):Observable<Object>{
    let auth="Bearer "+tokien;
    let heade={
    Authorization:auth
   }
    return this.http.get(this.baseUrl+'getAll',{headers:heade});
  }
}
