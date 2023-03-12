import { Component } from '@angular/core';
import { Validator,FormGroup, FormBuilder, Validators} from "@angular/forms";
import { Router } from '@angular/router';
import { UsersdataService } from 'src/app/services/usersdata.service';
@Component({
  selector: 'app-owner-sign-up',
  templateUrl: './owner-sign-up.component.html',
  styleUrls: ['./owner-sign-up.component.scss']
})
export class OwnerSignUpComponent {
  Ownerdata!:FormGroup;
  constructor(private fb:FormBuilder,private route:Router,private userdata:UsersdataService){
this.admindataValidator()
  }
admindataValidator(){
this.Ownerdata=this.fb.group({
  Firstname:['',[Validators.required]],
  Lastname:['',[Validators.required]],
  Email:['',[Validators.required]],
  Gender:[''],
  Mobilenumber:['',[Validators.required]],
Password:['',[Validators.required]]
})
}
submitdata(data:any){
  console.log(data);
//postapi
  this.userdata.PostOwnerCall(data).subscribe((result)=>{
console.log(result);
  })
  alert('Your Account Created Sucessfully')
  this.route.navigateByUrl('/owner-sign-in')

}
}
