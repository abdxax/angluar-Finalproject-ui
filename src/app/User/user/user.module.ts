import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from '../account/account.component';
import { HireComponent } from '../hire/hire.component';
import { WorkComponent } from '../work/work.component';
import { FreelancerComponent } from '../freelancer/freelancer.component';
import { ProjectComponent } from '../project/project.component';
import { UserRoutingModule } from './user-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashbordUserComponent } from '../dashbord-user/dashbord-user.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    DashbordUserComponent,
    AccountComponent,
    HireComponent,
    WorkComponent,
    FreelancerComponent,
    ProjectComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    UserRoutingModule
  ]
})
export class UserModule { }
