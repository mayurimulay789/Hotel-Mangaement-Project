import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
constructor(private route:Router){

}
 back()
  {
    this.route.navigateByUrl("/landing");
  }
viewhotels(){
  this.route.navigateByUrl("/view-hotels");
}
signup(){
  this.route.navigateByUrl("/admin-sign-up");
}
signin(){
  this.route.navigateByUrl("/admin-sign-in");
}



}
