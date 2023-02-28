import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { HttpClientModule } from '@angular/common/http';
import { AdminModule } from './Admin/admin/admin.module';
import { UserModule } from './User/user/user.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InfoUpdateComponent } from './User/info-update/info-update.component';
import { CreateProfileComponent } from './User/create-profile/create-profile.component';
import { CommonModule } from '@angular/common';
import { OfferFreelancerComponent } from './User/offer-freelancer/offer-freelancer.component';
import { ShowOfferComponent } from './User/show-offer/show-offer.component';









//import { AdminModuleModule } from './Admin/admin-module/admin-module.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    InfoUpdateComponent,
    CreateProfileComponent,
    OfferFreelancerComponent,
    ShowOfferComponent,
   // TypeServiceComponent,
    //DashbordUserComponent,
    //HireComponent,
    //ProjectComponent,
    //FreelancerComponent,
   // WorkComponent,
    //CitesComponent,
    //UpdatecityComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AdminModule,
    UserModule,
    BrowserAnimationsModule,
   // ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
