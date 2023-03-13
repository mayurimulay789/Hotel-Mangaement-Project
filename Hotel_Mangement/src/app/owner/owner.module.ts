import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnerRoutingModule } from './owner-routing.module';
import { OwnerComponent } from './owner.component';
import { OwnerSignInComponent } from './owner-sign-in/owner-sign-in.component';
import { OwnerSignUpComponent } from './owner-sign-up/owner-sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { OwnerSucessComponent } from './owner-sucess/owner-sucess.component';
import { OwnerFailComponent } from './owner-fail/owner-fail.component';
import { NewHotelRegistrationComponent } from './new-hotel-registration/new-hotel-registration.component';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  declarations: [
    OwnerComponent,
    OwnerSignInComponent,
    OwnerSignUpComponent,
    HotelListComponent,
    OwnerSucessComponent,
    OwnerFailComponent,
    NewHotelRegistrationComponent
  ],
  imports: [
    CommonModule,
    OwnerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule
  ]
})
export class OwnerModule { }
