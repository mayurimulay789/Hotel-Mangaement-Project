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
constructor(private userdata:UsersdataService,private router:Router){
  this.DataValidator()
}
DataValidator(){
  this.userdata.GetHotelDetails().subscribe((data) => {
this.apidata=data;
console.log(this.apidata);
 })
 
this.flag=true;
}
deleteData(id:any){
  this.userdata.DeleteOwnerCall(id).subscribe((data) =>{
  this.apidata=data;
  console.log(this.apidata); 
})
}
 async editData(Id:any){
  this.userdata.dataId=Id;
this.userdata.postapidata = await this.userdata.GetHotelDetails().toPromise()

this.router.navigateByUrl('/new-hotel-registration')
}
}
