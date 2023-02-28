import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { data } from 'jquery';
import { UserService } from '../user.service';

@Component({
  selector: 'app-offer-freelancer',
  templateUrl: './offer-freelancer.component.html',
  styleUrls: ['./offer-freelancer.component.css']
})
export class OfferFreelancerComponent implements OnInit {
  tokien:any;
  userLogin:any;
  service:any;

  constructor(private bulider:FormBuilder,private user:UserService,private router:Router) { }

  ngOnInit(): void {
    this.tokien=localStorage.getItem("tokin");
    this.getService();

   // console.log(this.service[0])
  }

  getService(){
    this.user.getService(this.tokien,3).subscribe((data:any)=>{
      this.service=data;
      console.log(data)
    })
  }

}
