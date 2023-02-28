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



  getWorks(tokien:any):Observable<Object>{
    let auth="Bearer "+tokien;
    let head={
      Authorization:auth
    }
    return  this.hhtp.get("http://localhost:8080/api/v1/user/work",{ headers: head })

  }

  getCitys(tokien:any):Observable<Object>{
    let auth="Bearer "+tokien;
    let head={
      Authorization:auth
    }
    return  this.hhtp.get("http://localhost:8080/api/v1/user/profile/getCity",{ headers: head })
  }

  updateInfo(tokien:any,user:any):Observable<Object>{
    let auth="Bearer "+tokien;
    let head={
      Authorization:auth
    }
    return this.hhtp.put("http://localhost:8080/api/v1/user/profile/updateInfo",user,{headers:head})
  }

  getSerivceType(tokien:any):Observable<Object>{
    let auth="Bearer "+tokien;
    let head={
      Authorization:auth
    }
    return this.hhtp.get("http://localhost:8080/api/v1/user/service/details/getServiceType",{headers:head})
  }

  createFreelancer(tokien:any,freelancer:any):Observable<Object>{
    let auth="Bearer "+tokien;
    let head={
      Authorization:auth
    }
    return this.hhtp.post("http://localhost:8080/api/v1/user/freelancer/addFreelancerWithService",freelancer,{headers:head})
  }

  getService(tokien:any,serviceId:any):Observable<Object>{
    let auth="Bearer "+tokien;
    let head={
      Authorization:auth
    }
    return this.hhtp.get(`http://localhost:8080/api/v1/user/service/details/getServiceByType/${serviceId}`,{headers:head})
  }


}
