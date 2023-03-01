import {Component, Input, OnInit} from '@angular/core';
// import { } from "../user.service";
import {WorkService} from "./work.service";
import {CitesService} from "../../Admin/cites.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  @Input() item:any;

  constructor(private workService:WorkService,private router:Router) {
    this.getWorks();
  }

  ngOnInit(): void {
    this.getWorks();
  }
  works:any;
  token=localStorage.getItem("tokin");
  getWorks(){

    this.workService.getWorks(this.token).subscribe((data:any)=>{
      this.works=data
      console.log(this.works)
    },(error)=>{
      console.log(error)
    })
  //  console.log(this.works)
  }

}
