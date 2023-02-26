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
  constructor(private cityService:CitesService,private router:Router,private bulider:FormBuilder) { }

  ngOnInit(): void {
    let tokien=localStorage.getItem("tokin");
    this.cityService.getCites(tokien).subscribe((data)=>{
      this.city=data
    })
  }

  addCity=this.bulider.group({
    cityName:this.bulider.control('',Validators.required)
  })

  addCitys(){
    let tokien=localStorage.getItem("tokin");
   let city={cityName:this.addCity.get("cityName")?.value}
   this.cityService.addCity(city,tokien).subscribe((data)=>{
    console.log(data)
   })
  }

  deleteCity(cityId:any){
   this.cityService.delete(cityId,this.tokien).subscribe((data)=>{
    this.router.navigate(['admin/city'])
   },(error)=>{
    this.router.navigate(['admin/city'])
   })
  }

}
