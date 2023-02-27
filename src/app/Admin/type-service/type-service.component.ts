import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';
import { TypeServicesService } from '../type-services.service';

@Component({
  selector: 'app-type-service',
  templateUrl: './type-service.component.html',
  styleUrls: ['./type-service.component.css']
})
export class TypeServiceComponent implements OnInit {
   tokien=localStorage.getItem("tokin");
  constructor(private serv:TypeServicesService) { }

  ngOnInit(): void {
    this.serv.getServices(this.tokien).subscribe((data:any)=>{
      console.log(data)

    },(error:HttpErrorResponse)=>{
     console.log(error.message)
    })
  }

}
