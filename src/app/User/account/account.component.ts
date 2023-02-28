import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  tokien:any;
  profile:any;
  constructor(private user:UserService) { }

  ngOnInit(): void {
    let tok=localStorage.getItem("tokin");
    this.tokien=tok;
    console.log("tokien "+this.tokien)
    this.user.getprofile(tok).subscribe((data:any)=>{
        console.log(data)
        this.profile=data
    })

    console.log("profile "+this.profile)

   /* this.user.addProfile({cityId:1,phone:'0568508989'},this.tokien).subscribe((data:any)=>{
      console.log(data)
    })*/
  }

}
