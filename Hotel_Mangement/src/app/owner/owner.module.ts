import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnerRoutingModule } from './owner-routing.module';
import { OwnerComponent } from './owner.component';
import { OwnerSignInComponent } from './owner-sign-in/owner-sign-in.component';
import { OwnerSignUpComponent } from './owner-sign-up/owner-sign-up.component';
import { MyHotelListComponent } from './my-hotel-list/my-hotel-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    OwnerComponent,
    OwnerSignInComponent,
    OwnerSignUpComponent,
    MyHotelListComponent
  ],
  imports: [
    CommonModule,
    OwnerRoutingModule,FormsModule,ReactiveFormsModule
  ]
})
export class OwnerModule { }
