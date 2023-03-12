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
constructor(private router:Router,userdata:UsersdataService){
this.SucessValidator()
}
SucessValidator(){
this.apidata=
}
}
