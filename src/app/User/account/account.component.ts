import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { parseJSON } from 'jquery';
import { UserService } from '../user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  tokien:any;
  profile:any=null;
  userLogin:any;
  isHasProfile:boolean=true;
  constructor(private user:UserService) { }

  ngOnInit(): void {
    let tok=localStorage.getItem("tokin");
    this.tokien=tok;
    let us:any=localStorage.getItem('user');
    this.userLogin= JSON.parse(us);
    console.log("tokien "+this.tokien)
    this.user.getprofile(tok).subscribe((data:any)=>{
        console.log(data)
        this.profile=data
    },(error:HttpErrorResponse)=>{
      if(error.status==400){
        this.profile=null
        console.log("error prof "+this.profile)
      }
      else if(error.status==200){
        this.isHasProfile=true
        console.log(this.isHasProfile)
      }
    })

    console.log("profile "+this.profile)

   /* this.user.addProfile({cityId:1,phone:'0568508989'},this.tokien).subscribe((data:any)=>{
      console.log(data)
    })*/
  }

}
