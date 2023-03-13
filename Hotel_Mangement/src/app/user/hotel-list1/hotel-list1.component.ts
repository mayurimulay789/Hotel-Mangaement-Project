import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersdataService } from 'src/app/services/usersdata.service';

@Component({
  selector: 'app-hotel-list1',
  templateUrl: './hotel-list1.component.html',
  styleUrls: ['./hotel-list1.component.scss']
})
export class HotelList1Component {
searchText:any='';
apidata1:any
constructor(private router:Router,private userdata:UsersdataService){
this.DataValidator()
}
DataValidator(){
this.userdata.GetHotelDetails().subscribe((data)=>{
  this.apidata1=data;
  console.log(data);
})
}

}
