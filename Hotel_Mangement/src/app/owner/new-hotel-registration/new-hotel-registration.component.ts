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
  editdata:any
newRegistration:any
  dataId:any
  constructor(private Fb:FormBuilder,private userdata:UsersdataService, private router:Router){
  }
    ngOnInit (){ 
      this.newRegistration=this.userdata.newRegistration
this.editdata = this.userdata.postapidata
console.log('data...',this.editdata);
if (this.newRegistration) {
  this.editdata = {};
}
else{
  this.editdata=this.userdata.postapidata
}
this.LoginDataValidator()
  }
  LoginDataValidator(){
    this.Registrationform=this.Fb.group({
      userName:[this.editdata? this.editdata.userName : '',[Validators.required]],
      hotelName:[this.editdata? this.editdata.hotelName: '' ,[Validators.required]],
      hotelAddress:[ this.editdata? this.editdata.hotelAddress : '' ,[Validators.required]],
      hotelMobile:[this.editdata? this.editdata.hotelMobile:'',[Validators.required]],
      hotelMenu:[this.editdata? this.editdata.hotelMenu:'',[Validators.required]],
      roomAvailable:[this.editdata? this.editdata.roomAvailable:'',[Validators.required]],
      userPass:[this.editdata? this.editdata.userPass:'',[Validators.required]],
      ownerCheck:[this.editdata? this.editdata.ownerCheck:'',[Validators.required]]
    })
  }
  Submitdata(Data:any){
 this.userdata.postHotelCall(Data).subscribe((res)=>{
console.log(res);

      })
    
    alert('data update succefully')
    this.router.navigateByUrl('/owner')
    }
 
} 





