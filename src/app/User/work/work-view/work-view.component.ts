import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {WorkService} from "../work.service";

@Component({
  selector: 'app-work-view',
  templateUrl: './work-view.component.html',
  styleUrls: ['./work-view.component.css']
})
export class WorkViewComponent implements OnInit {
  constructor(private router:ActivatedRoute,private workService:WorkService) { }
  token=localStorage.getItem("tokin");
  id:any
  work:any;
  // workService:WorkService
  ngOnInit(): void {
    this.id=this.router.snapshot.paramMap.get("id");
    this.workService.getWork(this.id,this.token).subscribe((data:any)=>{
      this.work=data
    },(error)=>{
      console.log(error)
    });

  }

  getImage(filePath: string) {
    filePath = "Users/uploads/user-3/works/work-2/1677422538497.png";
    this.workService.getImage(filePath,this.token).subscribe((data:any)=>{
      return data
    },(error)=>{
      return "null"
    });
  }
}
