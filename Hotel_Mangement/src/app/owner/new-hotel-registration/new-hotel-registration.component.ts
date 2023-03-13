import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersdataService } from 'src/app/services/usersdata.service';

@Component({
  selector: 'app-new-hotel-registration',
  templateUrl: './new-hotel-registration.component.html',
  styleUrls: ['./new-hotel-registration.component.scss']
})
export class NewHotelRegistrationComponent {
  Registrationform!:FormGroup
  constructor(private Fb:FormBuilder,private userdata:UsersdataService, private router:Router){
this.LoginDataValidator()
  }
  LoginDataValidator(){
    this.Registrationform=this.Fb.group({
      username:['',[Validators.required]],
      userMobilenumber:['',[Validators.required]],
      hotelName:['',[Validators.required]],
      hoteladdress:['',[Validators.required]],
      hotelMobile:['',[Validators.required]],
      hotelMenu:['',[Validators.required]],
      roomAvailible:['',[Validators.required]],
      userpass:['',[Validators.required]],
      ownercheck:['',[Validators.required]]
    })
  }
  Submitdata(Data:any){
    console.log(Data);
    
  }
}
