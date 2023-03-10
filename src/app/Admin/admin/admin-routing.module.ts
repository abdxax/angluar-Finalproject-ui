import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CitesComponent } from '../cites/cites.component';
import { DashbordComponent } from '../dashbord/dashbord.component';
import { TypeServiceComponent } from '../type-service/type-service.component';
import { UpdatecityComponent } from '../updatecity/updatecity.component';
//import { DashbordComponent } from 'src/app/auth/Admin/dashbord/dashbord.component';



const routes: Routes = [
    {
        path: 'admin',
        component:  DashbordComponent,
        children: [
          {
            path:"city",component:CitesComponent
          },
          {
            path:'updateCity/:id',component:UpdatecityComponent
          },
          {
            path:'serviceType',component:TypeServiceComponent
          }

        ]
    }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
