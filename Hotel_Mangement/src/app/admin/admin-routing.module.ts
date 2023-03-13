import { ViewEncapsulation } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminFailComponent } from './admin-fail/admin-fail.component';
import { AdminSignInComponent } from './admin-sign-in/admin-sign-in.component';
import { AdminSignUpComponent } from './admin-sign-up/admin-sign-up.component';
import { AdminSucessComponent } from './admin-sucess/admin-sucess.component';
import { AdminComponent } from './admin.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { ViewHotelsComponent } from './view-hotels/view-hotels.component';

const routes: Routes = [{ path: '', component: AdminComponent },
{path:'view-hotels', component:ViewHotelsComponent},
{path:'',redirectTo:'admin-sign-up',pathMatch:'full'},
{path:'admin-sign-up',component:AdminSignUpComponent},
{path:'admin-sign-in',component:AdminSignInComponent},
{path:'admin-sucess',component:AdminSucessComponent},
{path:'admin-fail',component:AdminFailComponent},
{path:'hotel-list',component:HotelListComponent}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
