import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserSignInComponent } from './user-sign-in/user-sign-in.component';
import { UserSignUpComponent } from './user-sign-up/user-sign-up.component';
import { ViewHotelsComponent } from './view-hotels/view-hotels.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserSucessComponent } from './user-sucess/user-sucess.component';
import { HotelbookingComponent } from './hotelbooking/hotelbooking.component';
import { MatIconModule } from "@angular/material/icon";

import { SharedModule } from '../shared/shared.module';
import { HotelList1Component } from './hotel-list1/hotel-list1.component';

@NgModule({
  declarations: [
    UserComponent,
    UserSignInComponent,
    UserSignUpComponent,
    ViewHotelsComponent,
    UserSucessComponent,
    HotelbookingComponent,
    HotelList1Component
  

  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,
    SharedModule
  ]
})
export class UserModule { }
