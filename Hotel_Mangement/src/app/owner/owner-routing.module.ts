import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyHotelListComponent } from './my-hotel-list/my-hotel-list.component';
import { OwnerSignInComponent } from './owner-sign-in/owner-sign-in.component';
import { OwnerComponent } from './owner.component';

const routes: Routes = [{ path: '', component: OwnerComponent },
{path:'',redirectTo:'/owner-sign-up',pathMatch:'full'},
{path:'owner-sign-in',component:OwnerSignInComponent},
{path:'my-hotel-list',component:MyHotelListComponent}];
@NgModule({
imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule { }
