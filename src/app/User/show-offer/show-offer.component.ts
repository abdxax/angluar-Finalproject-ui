import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-show-offer',
  templateUrl: './show-offer.component.html',
  styleUrls: ['./show-offer.component.css']
})
export class ShowOfferComponent implements OnInit {
  tokien:any;
  userLogin:any;
  service:any;
  constructor(private bulider:FormBuilder,private user:UserService,private router:Router) { }

  ngOnInit(): void {
    this.tokien=localStorage.getItem("tokin");
  }

}
