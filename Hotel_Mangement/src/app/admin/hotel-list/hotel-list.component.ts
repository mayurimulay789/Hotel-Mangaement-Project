import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { UsersdataService } from 'src/app/services/usersdata.service';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.scss']
})
export class HotelListComponent {
apidata:any;
constructor(private router:Router, private userdata:UsersdataService){
this.SucessValidator()
}
//getapi
SucessValidator(){
this.userdata.GetHotelDetails().subscribe((data)=>{
this.apidata=data;
console.log(this.apidata);
})
}
//deleteapi
deleteData(id:any){
this.userdata.DeleteHotelData(id).subscribe((result)=>{
this.apidata=result;
console.log(this.apidata);

})
}
}
