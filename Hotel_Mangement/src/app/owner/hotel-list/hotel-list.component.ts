import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersdataService } from 'src/app/services/usersdata.service';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.scss']
})
export class HotelListComponent {
apidata:any;
flag=false;
  
constructor(private userdata:UsersdataService,private router:Router){}
  ngOnInit():void{
  this.DataValidator()
}

DataValidator(){
  this.userdata.GetHotelDetails().subscribe((data) => {
this.apidata=data;
console.log( data);
 })
 
this.flag=true;
}
 deleteData(Id:any){
 this.userdata.DeleteHotelData(Id).subscribe((result)=>{
  this.apidata=result;
  console.log(this.apidata);
  
 })

//to refresh HotelList
this.DataValidator()
}


 async editdata(Id:any){
  this.userdata.newRegistration = false;
//  this.userdata.dataId=Id;
this.userdata.postapidata = await this.userdata.GetHotelById(Id).toPromise()

this.router.navigateByUrl('/owner/new-hotel-registration')
}
}
