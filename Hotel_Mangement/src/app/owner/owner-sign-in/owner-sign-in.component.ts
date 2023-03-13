import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from "@angular/forms";
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-owner-sign-in',
  templateUrl: './owner-sign-in.component.html',
  styleUrls: ['./owner-sign-in.component.scss']
})
export class OwnerSignInComponent {
ownerform!:FormGroup;
constructor(private fb:FormBuilder,private router:Router,private http:HttpClient){
this.OwnerdataValidator1()
}
OwnerdataValidator1(){
this.ownerform=this.fb.group({
Email:['',[Validators.required]],
Password:['',[Validators.required]],
})
}
ownersign(data:any){
console.log(data);

//getapi
this.http.get<any>('http://localhost:3000/owner').subscribe(res=>{
  const owner = res.find((result:any)=>{
 return result.Email === this.ownerform.value.Email && result.Password === this.ownerform.value.Password
  })
  if(owner){
    alert('Login Sucessfully');
    this.ownerform.reset();
    this.router.navigateByUrl('/owner-sucess')
  }
else{
  alert('User Not Found')
  this.ownerform.reset();
  this.router.navigateByUrl('/owner-sign-in')
}
}
)}
}
