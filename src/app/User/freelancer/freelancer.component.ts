import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-freelancer',
  templateUrl: './freelancer.component.html',
  styleUrls: ['./freelancer.component.css']
})
export class FreelancerComponent implements OnInit {
  tokien:any;
  profile:any;
  userLogin:any;
  service:any;
  constructor(private bulider:FormBuilder,private user:UserService,private router:Router,private rout:ActivatedRoute) { }

  ngOnInit(): void {
     this.tokien=localStorage.getItem("tokin");
     this.user.getSerivceType(this.tokien).subscribe((data:any)=>{
      console.log(data)
      this.service=data
     })

  }

  formFree=this.bulider.group({
    serviceId:['',Validators.required],
    describe:['',Validators.required],
    capcity:['',Validators.required]
  })


  saveFreelancer(){
    let freelanc={capacity:this.formFree.controls['capcity'].value,description:this.formFree.controls['describe'].value,serviceTypeId:this.formFree.controls['serviceId'].value}
    this.user.createFreelancer(this.tokien,freelanc).subscribe((data:any)=>{

    },(error:HttpErrorResponse)=>{
      if(error.status==200){
        this.router.navigate(['user/account'])
      }
      console.log(error.status)
    })

  }


}
