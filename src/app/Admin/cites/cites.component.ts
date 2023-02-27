import { HttpErrorResponse, HttpHeaderResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CitesService } from '../cites.service';

@Component({
  selector: 'app-cites',
  templateUrl: './cites.component.html',
  styleUrls: ['./cites.component.css']
})
export class CitesComponent implements OnInit {
 city:any=[];
 tokien=localStorage.getItem("tokin");
 IsmodelShow=false;
  constructor(private cityService:CitesService,private router:Router,private bulider:FormBuilder) { }

  ngOnInit(): void {
    this.loadCity();
  }

  addCity=this.bulider.group({
    cityName:this.bulider.control('',Validators.required)
  })

  addCitys(){
    let tokien=localStorage.getItem("tokin");
   let city={cityName:this.addCity.get("cityName")?.value}
   this.cityService.addCity(city,tokien).subscribe((data:any)=>{
    this.loadCity()
   },(error:HttpErrorResponse)=>{
     console.log(error.message)
   })
  }

  deleteCity(cityId:any){
   this.cityService.delete(cityId,this.tokien).subscribe((data)=>{
   // this.router.navigate(['admin/city'])
    this.loadCity()

   },(error)=>{
    //this.router.navigate(['admin/city'])
    this.loadCity()
   })
  }

  loadCity(){
    let tokien=localStorage.getItem("tokin");
    this.cityService.getCites(tokien).subscribe((data)=>{
      this.city=data
    })
  }

  close() {
    this.IsmodelShow=true;// set false while you need open your model popup
   // do your more code
}

}
