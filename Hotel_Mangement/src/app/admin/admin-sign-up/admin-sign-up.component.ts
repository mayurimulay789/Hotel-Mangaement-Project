
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { UsersdataService } from 'src/app/services/usersdata.service';

@Component({
  selector: 'app-admin-sign-up',
  templateUrl: './admin-sign-up.component.html',
  styleUrls: ['./admin-sign-up.component.scss']
})
export class AdminSignUpComponent {
  Adminsigndata! :FormGroup;
constructor(private formbuild:FormBuilder,private userdata:UsersdataService,private route:Router){

  this.dataValidator()
}
dataValidator(){
 this.Adminsigndata=this.formbuild.group({
Firstname:['',[Validators.required]],
Lastname:['',[Validators.required]],
Email:['',[Validators.required]],
Gender:[''],
Mobilenumber:['', [Validators.required,Validators.minLength(10)]],
Password:['',[Validators.required]],
 })
}

admindata(value:any){
  console.log(value);
  //postapi
this.userdata.PostAdminCall(value).subscribe((res)=>{
console.log(res);
})
alert("your account Created Sucessfully")
this.route.navigateByUrl('/admin-sign-in')
}
}



