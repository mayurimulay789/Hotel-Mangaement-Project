import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersdataService } from 'src/app/services/usersdata.service';

@Component({
  selector: 'app-admin-sign-in',
  templateUrl: './admin-sign-in.component.html',
  styleUrls: ['./admin-sign-in.component.scss']
})
export class AdminSignInComponent{
Admindataform!:FormGroup;

constructor(private fb:FormBuilder,private ds:UsersdataService,private route:Router,private http:HttpClient){ 

this.admindatavalidator()
}


admindatavalidator(){
  this.Admindataform=this.fb.group({
   Email:['',[Validators.required]],
  Password:['',[Validators.required]],
  })
}
submitdata(data:any){
console.log(data);
//getapi
this.http.get<any>('http://localhost:3000/admin').subscribe(result=>{
  const admin=result.find((res:any)=>{
    return res.Email===this.Admindataform.value.Email && res.Password===this.Admindataform.value.Password
  })
  if(admin){
    alert('Login Sucessful')
    this.Admindataform.reset();
    this.route.navigateByUrl('/admin-sucess')
  }
  else{
    alert('User Not Found')
    this.Admindataform.reset();
    this.route.navigateByUrl('/admin-sign-in')
  }
}
)}

}
