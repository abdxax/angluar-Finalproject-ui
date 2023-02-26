import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../type/User';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private bulider:FormBuilder,private loginUser:LoginService,private router:Router) { }

  ngOnInit(): void {
  }
  loginForm=this.bulider.group({
    email:this.bulider.control("",Validators.required),
    password:this.bulider.control("",Validators.required),
  })

  login(){
  let user={email:this.loginForm.get("email")?.value,password:this.loginForm.get('password')?.value};
   this.loginUser.login(user).subscribe((data:any)=>{
    console.log(data)
    let user:User={name:data.user.name,email:data.user.email,password:"",role:data.user.role};
    let tokin=data.message;
    localStorage.setItem("user",JSON.stringify(user));
    localStorage.setItem("tokin",tokin);
    if(user.role=="ADMIN"){
     this.router.navigate(['admin'])
    }
    else{
      this.router.navigate(['user'])
    }
    //alert (x)
   },(error)=>{
    console.log(error)
   })
  }

}
