import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private bulider:FormBuilder) { }

  ngOnInit(): void {
    
  }
  registerForm=this.bulider.group({
    name:this.bulider.control(null,Validators.required),
    email:this.bulider.control(null,Validators.compose([Validators.required,Validators.email])),
    password:this.bulider.control(null,[Validators.required,Validators.minLength(6)])
   // re-password=new FormControl(null,[Validators.required,Validators.minLength(6)]),

  })

}
