import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from '../type/City';
import { User } from '../type/User';

@Injectable({
  providedIn: 'root'
})
export class CitesService {

  constructor(private http:HttpClient) { }

  getCites(tokien:any):Observable<Object>{
    let auth="Bearer "+tokien;
   let heade={
    Authorization:auth
   }
    return this.http.get("http://localhost:8080/api/v1/admin/city/getAll",{ headers: heade })
  }

  getCity(id:any,tokien:any):Observable<Object>{
    let auth="Bearer "+tokien;
   let heade={
    Authorization:auth
   }
   let param = new HttpParams();
    param.append("id", id)
    return this.http.get(`http://localhost:8080/api/v1/admin/city/getCity/${id}`,{ headers: heade})
  }

   updateCity(city:any,tokien:any):Observable<Object>{
    let auth="Bearer "+tokien;
    let heade={
     Authorization:auth
    }
    let ci={cityName:city.name,id:city.id}
     return this.http.put(`http://localhost:8080/api/v1/admin/city/update/${city.id}`,city,{ headers: heade,responseType:'json'})
   }

   addCity(city:any,tokien:any):Observable<Object>{
    let auth="Bearer "+tokien;
    let heade={
     Authorization:auth
    }
    return this.http.post("http://localhost:8080/api/v1/admin/city/addCity",city,{headers:heade})
   }

   delete(cityId:any,tokien:any){
    let auth="Bearer "+tokien;
    let heade={
     Authorization:auth
    }
    return this.http.delete(`http://localhost:8080/api/v1/admin/city/delete/${cityId}`,{headers:heade})
   }

  }

