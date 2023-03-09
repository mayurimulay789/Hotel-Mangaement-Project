import { Component } from '@angular/core';
import {  } from "@angular/forms";
import {Route, Router } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  constructor(private router:Router){

  }
  signin(){
this.router.navigateByUrl("/user-sign-in")
  }
  signup(){
    this.router.navigateByUrl("/user-sign-up")

  }
  viewhotels(){
    this.router.navigateByUrl("/view-hotels")
  }
  back(){
    this.router.navigateByUrl("/landing")
  }
}
