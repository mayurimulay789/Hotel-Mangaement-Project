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
import { UserfailComponent } from './userfail/userfail.component';
import { HotelbookingComponent } from './hotelbooking/hotelbooking.component';



@NgModule({
  declarations: [
    UserComponent,
    UserSignInComponent,
    UserSignUpComponent,
    ViewHotelsComponent,
    UserSucessComponent,
    UserfailComponent,
    HotelbookingComponent,

  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class UserModule { }
