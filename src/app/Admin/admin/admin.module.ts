import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { AdminRoutingModule } from './admin-routing.module';
import { DashbordComponent } from '../dashbord/dashbord.component';



@NgModule({
  declarations: [
   // DashbordComponent
   DashbordComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
