import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersdataService {


  userurl='http://localhost:3000/user'
adminurl='http://localhost:3000/admin'
ownerUrl ='http://localhost:3000/owner'
  constructor(private http:HttpClient) { }
  //getapi
GetUserCall(){
  return this.http.get(this.userurl)
}
//postapi
PostUserCall(data:any){
  return this.http.post(this.userurl,data)
}

//getapi
GetAdminCall(){
 return this.http.get(this.adminurl)
}
//postapi
PostAdminCall(data:any){
 return this.http.post(this.adminurl,data)
}
//postapi
PostOwnerCall(data:any){
return this.http.post(this.ownerUrl,data)
}

//getapi
GetOwnerCall(){
 return this.http.get(this.ownerUrl);
}


}
