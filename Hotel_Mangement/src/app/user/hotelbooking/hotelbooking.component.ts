import { Component } from '@angular/core';
import { FormBuilder,FormGroup,Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersdataService } from 'src/app/services/usersdata.service';

@Component({
  selector: 'app-hotelbooking',
  templateUrl: './hotelbooking.component.html',
  styleUrls: ['./hotelbooking.component.scss']
})
export class HotelbookingComponent {
  bookingform!:FormGroup
constructor(private userdata:UsersdataService,private fb:FormBuilder,private router:Router){
this.datavalidator()
}
datavalidator(){
  this.bookingform=this.fb.group({
    username:['', [Validators.required]],
    userAddress:['',[Validators.required]],
    bookingAmount:['1000',[Validators.required]],
    userpass:['',[Validators.required]],
  })
}
postHotelBookingdata(data:any){
console.log(data);

this.userdata.HotelBookingCall(data).subscribe((res)=>{
  console.log(res);
  
})
confirm("You book your hotel succesfully");
    this.router.navigateByUrl('/user')
}
}
