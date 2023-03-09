import { Component } from '@angular/core';
import { FormBuilder,FormGroup, MaxLengthValidator, Validators } from "@angular/forms";
import { UsersdataService } from 'src/app/services/usersdata.service';

@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.scss']
})
export class UserSignUpComponent {
  Custdata! :FormGroup;
constructor(private fb:FormBuilder,private userdata:UsersdataService){

}
ngOnInit() {
this.studentdataformvalidators()

}
 studentdataformvalidators(){
this.Custdata=this.fb.group({
Firstname:['',[Validators.required,Validators.maxLength(20)]],
Lastname:['' , [Validators.required]],
Email:['',[Validators.required]],
Gender:[''],
Mobilenumber:['' ,[Validators.required,Validators.minLength(10)]],
Password:['',[Validators.required]],
})
 }
 saveuser(value:any){
console.log(value);
this.userdata.saveuser(value).subscribe((result)=>{
  console.log(result);
  
})
 }
}
