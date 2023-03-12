import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { UsersdataService } from 'src/app/services/usersdata.service';

@Component({
  selector: 'app-user-sign-in',
  templateUrl: './user-sign-in.component.html',
  styleUrls: ['./user-sign-in.component.scss']
})
export class UserSignInComponent {
  userdataform!:FormGroup
  users:any;
constructor(private fb:FormBuilder,private userdata:UsersdataService,private http:HttpClient , private route:Router){

}
ngOnInit(){
this.formvalidators()
}
formvalidators(){
this.userdataform=this.fb.group({
Email:['',[Validators.required]],
Password:['',[Validators.required]],
})  
}

sumbitformdata(data:any){
  console.log(data);
  
this.http.get<any>('http://localhost:3000/user').subscribe(result=>{
  const user=result.find((pes:any)=>{
    return pes.Email===this.userdataform.value.Email && pes.Password===this.userdataform.value.Password
  })
  if(user){
    alert("Login successful");
    this.userdataform.reset();
    this.route.navigateByUrl('user-sucess')
  }
  else{
    alert("user not found")
    this.userdataform.reset();
    this.route.navigateByUrl('userfail')
  }




})
}
 }

