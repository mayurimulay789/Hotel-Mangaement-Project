import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-hotels',
  templateUrl: './view-hotels.component.html',
  styleUrls: ['./view-hotels.component.scss']
})
export class ViewHotelsComponent {
 constructor(private router:Router){
  
 }
 hotellist(){
  this.router.navigateByUrl('/user/hotel-list1')
 }
}
