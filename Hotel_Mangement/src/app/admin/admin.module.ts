import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ViewHotelsComponent } from './view-hotels/view-hotels.component';
import { AdminSignUpComponent } from './admin-sign-up/admin-sign-up.component';
import { AdminSignInComponent } from './admin-sign-in/admin-sign-in.component';
import { AdminSucessComponent } from './admin-sucess/admin-sucess.component';
import { AdminFailComponent } from './admin-fail/admin-fail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HotelListComponent } from './hotel-list/hotel-list.component';




@NgModule({
  declarations: [
    AdminComponent,
    ViewHotelsComponent,
    AdminSignUpComponent,
    AdminSignInComponent,
    AdminSucessComponent,
    AdminFailComponent,
    HotelListComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
  ReactiveFormsModule,
  HttpClientModule
  ],
})
export class AdminModule { }
