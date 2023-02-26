import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../type/User';
import { RgisterService } from './rgister.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private bulider:FormBuilder,private reg:RgisterService,private router:Router) { }

  ngOnInit(): void {

  }
  registerForm=this.bulider.group({
    name:this.bulider.control('',Validators.required),
    email:this.bulider.control('',Validators.compose([Validators.required,Validators.email])),
    password:this.bulider.control('',[Validators.required,Validators.minLength(6)])
   // re-password=new FormControl(null,[Validators.required,Validators.minLength(6)]),

  })

  registers(){
    if(this.registerForm.valid){
      let user={name:this.registerForm.controls['name'].value,email:this.registerForm.controls['email'].value,password:this.registerForm.controls['password'].value,role:'USER'};
      this.reg.registerForm(user).subscribe((data:any)=>{
         let d=data;
         if(d.message=="Register done"){
           this.router.navigate(['login'])
         }
      },(error:HttpErrorResponse)=>{
            console.log(error.message)
      })

    }
  }

}
