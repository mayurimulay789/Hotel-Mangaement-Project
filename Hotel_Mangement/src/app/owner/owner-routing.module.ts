import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { NewHotelRegistrationComponent } from './new-hotel-registration/new-hotel-registration.component';
import { OwnerSignInComponent } from './owner-sign-in/owner-sign-in.component';
import { OwnerSignUpComponent } from './owner-sign-up/owner-sign-up.component';
import { OwnerComponent } from './owner.component';

const routes: Routes = [{ path: '', component: OwnerComponent },
{path:'',redirectTo:'/owner-sign-up',pathMatch:'full'},
{path:'owner-sign-up',component:OwnerSignUpComponent},
{path:'owner-sign-in',component:OwnerSignInComponent},
{path:'hotel-list',component:HotelListComponent},
{path:'new-hotel-registration',component:NewHotelRegistrationComponent}]
@NgModule({
imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule { }
