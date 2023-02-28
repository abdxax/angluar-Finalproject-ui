import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from '../account/account.component';
import { CreateProfileComponent } from '../create-profile/create-profile.component';
import { DashbordUserComponent } from '../dashbord-user/dashbord-user.component';
import { FreelancerComponent } from '../freelancer/freelancer.component';
import { HireComponent } from '../hire/hire.component';
import { InfoUpdateComponent } from '../info-update/info-update.component';
import { ProjectComponent } from '../project/project.component';
import { WorkComponent } from '../work/work.component';




const routes: Routes = [
    {
        path: 'user',
        component:  DashbordUserComponent,
        children: [
         {path:'work',component:WorkComponent},
         {path:'project',component:ProjectComponent},
         {path:'hire',component:HireComponent},
         {path:'account',component:AccountComponent},
         {path:'freelancer',component:FreelancerComponent},
         {path:"infoUpdate/:id",component:InfoUpdateComponent},
         {path:"create/:id",component:CreateProfileComponent}

        ]
    }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
