import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersdataService } from '../services/usersdata.service';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.scss']
})
export class OwnerComponent {
constructor(private userdata:UsersdataService,private router:Router){
}
  ngOnInit(){

  }


  newReg(){
    this.userdata.newRegistration=true;
  this.router.navigateByUrl('/new-hotel-registration')
  }
}
