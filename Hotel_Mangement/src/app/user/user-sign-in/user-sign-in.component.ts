import { Component } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { UsersdataService } from 'src/app/services/usersdata.service';

@Component({
  selector: 'app-user-sign-in',
  templateUrl: './user-sign-in.component.html',
  styleUrls: ['./user-sign-in.component.scss']
})
export class UserSignInComponent {
  userdataform!:FormGroup
  users:any;
constructor(private fb:FormBuilder,private userdata:UsersdataService){
this.userdata.users().subscribe((data)=>{
  // const user = data.find((a:any)=>{
    console.log(data);
    
  })
  
}
 




ngOnInit(){
  this.datavalidator()
}
datavalidator(){
this.userdataform=this.fb.group({
Email:['' ,[Validators.required]],
Password:['',[Validators.required]]
})
}
sumbitformdata(data:string){
console.log(data);

}
}
