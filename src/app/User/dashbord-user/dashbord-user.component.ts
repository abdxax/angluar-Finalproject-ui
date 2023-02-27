import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/type/User';

@Component({
  selector: 'app-dashbord-user',
  templateUrl: './dashbord-user.component.html',
  styleUrls: ['./dashbord-user.component.css']
})
export class DashbordUserComponent implements OnInit {
  user:any=localStorage.getItem("user");
  title="Freelancer";
  userInfo:User=JSON.parse(this.user)
  constructor() { }

  ngOnInit(): void {
    console.log(this.user)
  }

}
