import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { AdminRoutingModule } from './admin-routing.module';
import { DashbordComponent } from '../dashbord/dashbord.component';
import { CitesComponent } from '../cites/cites.component';
import { UpdatecityComponent } from '../updatecity/updatecity.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
   // DashbordComponent
   DashbordComponent,
   CitesComponent,
   UpdatecityComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,

  ]
})
export class AdminModule { }
