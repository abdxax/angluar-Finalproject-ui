import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { City } from 'src/app/type/City';
import { CitesService } from '../cites.service';

@Component({
  selector: 'app-updatecity',
  templateUrl: './updatecity.component.html',
  styleUrls: ['./updatecity.component.css']
})
export class UpdatecityComponent implements OnInit {
 // id:number;
  tokien=localStorage.getItem("tokin");
 city:any;

  constructor(private cityService:CitesService,private router:Router,private route:ActivatedRoute,private bulider:FormBuilder) { }

  ngOnInit(): void {
  let id=this.route.snapshot.paramMap.get('id');
  this.city=this.cityService.getCity(id,this.tokien).subscribe((data)=>{
    this.city=data;
  })
  }

  updateCiry=this.bulider.group({
    cityName:this.bulider.control('',Validators.required)
  })

  update(){
    let id=this.route.snapshot.paramMap.get('id');
    console.log(this.updateCiry.get('cityName')?.value,id,this.tokien)
    let cit={cityName:this.updateCiry.get('cityName')?.value,id:id}
    this.cityService.updateCity(cit,this.tokien).subscribe((data)=>{
           this.router.navigate(['admin/city'])
    },(error:HttpErrorResponse)=>{
       console.log(error.message)
    })


  }

}
