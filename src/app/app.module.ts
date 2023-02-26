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
import { CitesComponent } from './Admin/cites/cites.component';
import { UpdatecityComponent } from './Admin/updatecity/updatecity.component';


//import { AdminModuleModule } from './Admin/admin-module/admin-module.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,

    CitesComponent,
      UpdatecityComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
