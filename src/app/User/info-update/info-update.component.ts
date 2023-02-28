import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RgisterService } from 'src/app/register/rgister.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-info-update',
  templateUrl: './info-update.component.html',
  styleUrls: ['./info-update.component.css']
})
export class InfoUpdateComponent implements OnInit {

  constructor(private bulider:FormBuilder,private user:UserService,private router:Router,private rout:ActivatedRoute ) { }
  id:any;
  profile:any=null;
  tokien:any;
  cityList:any;
  isHasprofile:boolean=true;
  ngOnInit(): void {
    this.tokien=localStorage.getItem("tokin");
    this.id=this.rout.snapshot.paramMap.get('id');
    this.user.getprofile(this.tokien).subscribe((data:any)=>{

      this.profile=data
      this.isHasprofile=true;
    },(error:HttpErrorResponse)=>{
      //this.isHasprofile=false;
    })

    this.getclityList();
  }
  updateInfo=this.bulider.group({

   name:this.bulider.control('',Validators.required),
   email:this.bulider.control('',[Validators.email,Validators.required]),
   phone:this.bulider.control('',Validators.required),
   cityId:this.bulider.control('',Validators.required)
})

getclityList(){
  this.user.getCitys(this.tokien).subscribe((data:any)=>{
    this.cityList=data;
    console.log(this.cityList)
  })
}

update(){

  if(this.updateInfo.valid){
    let cityid:any;
    if(this.updateInfo.controls['cityId'].value==null){
      cityid=this.profile.city.id;
    }
    else{
      cityid=this.updateInfo.controls['cityId'].value
    }
    let userInfo={name:this.updateInfo.controls['name'].value,email:this.updateInfo.controls['email'].value,phone:this.updateInfo.controls['phone'].value,cityId:cityid,userId:this.id}
    this.user.updateInfo(this.tokien,userInfo).subscribe((data:any)=>{
       console.log(data)
    },(errot:HttpErrorResponse)=>{
      console.log(errot)
    })
  }

}


}
