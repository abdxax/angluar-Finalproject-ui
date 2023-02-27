import { Component, OnInit } from '@angular/core';
import { UserService} from "../user.service";
import {CitesService} from "../../Admin/cites.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  constructor(private userService:UserService,private router:Router) {
    this.getWorks();
  }

  ngOnInit(): void {
    this.getWorks();
  }
  works:any;
  token=localStorage.getItem("tokin");
  getWorks(){

    this.userService.getWorks(this.token).subscribe((data:any)=>{
      this.works=data
      console.log(this.works)
    },(error)=>{
      console.log(error)
    })
  //  console.log(this.works)
  }

}
