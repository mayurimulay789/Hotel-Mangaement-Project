import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersdataService {


  userurl='http://localhost:3000/user'
adminurl='http://localhost:3000/admin'
ownerUrl ='http://localhost:3000/owner'
hotelurl = 'http://localhost:3000/hotelDetails'
hotelbooking='http://localhost:3000/hotelbooking'
postapidata:any
dataId:any
newRegistration:boolean =false;
postobj:any
postdata:any
hoteldetailsID:any
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
// gethotel details
GetHotelDetails(){
  return this.http.get(this.hotelurl);
}
//delete api
DeleteHotelData(ID:any){
  return this.http.delete(this.hotelurl + "/" + ID)
}
 
 //postapi
 HotelBookingCall(data:any){
   return this.http.post(this.hotelbooking,data)
 }
 //edit data by Hotellist - getapi
 GetHotelById(Id:Number){
  return this.http.get(this.hotelurl + '/' + Id)

 }
PatchHotelById(hoteldetails:any):any{
 return this.http.patch(this.hotelurl + '/' + this.hoteldetailsID ,hoteldetails )
}
 postHotelCall(data:any){
  return this.http.post(this.hotelurl,data)
 }
}
