import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})
export class CreateProfileComponent implements OnInit {

  constructor(private bulider:FormBuilder,private user:UserService,private router:Router,private rout:ActivatedRoute) { }
  id:any;
  profile:any=null;
  tokien:any;
  cityList:any;
  isHasprofile:boolean=true;
  ngOnInit(): void {
    this.tokien=localStorage.getItem("tokin");
    this.id=this.rout.snapshot.paramMap.get('id');
    this.user.getCitys(this.tokien).subscribe((data:any)=>{
      this.cityList=data;
      console.log(data)
    })
    //this.getclityList()
  }

  createProfile=this.bulider.group({

    phone:['',Validators.required],
    cityId:['',Validators.required]
  })

  getclityList(){
    let t=localStorage.getItem("tokin");
    console.log(t)
    this.user.getCitys(t).subscribe((data:any)=>{
      this.cityList=data;
      console.log("d"+data)
      console.log("cityss"+this.cityList)
    })
  }

  saveProfile(){
    if(this.createProfile.valid){
      let profile={phone:this.createProfile.controls['phone'].value,cityId:this.createProfile.controls['cityId'].value};
      this.user.addProfile(profile,this.tokien).subscribe((resp)=>{
        console.log(resp)
      },(error:HttpErrorResponse)=>{
        if(error.status==200){
          this.router.navigate(['admin/account'])
        }
        console.log(error.status)
      })

    }

  }

}
