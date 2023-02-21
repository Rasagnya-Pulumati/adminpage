
import { Component } from '@angular/core';
import { Hotel } from '../hotel';
import { HotelOperationService } from '../hotel-operation.service';
import { HotelAdminService } from '../hotel-admin.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
@Component({
  selector: 'app-admin-work',
  templateUrl: './admin-work.component.html',
  styleUrls: ['./admin-work.component.css']
})
export class AdminWorkComponent {
  __hotelService:HotelAdminService;
   h:Hotel = new Hotel(1,"Taj",3,"Hyderabad","pooja","emeraldpark.jpg","Good",3,2000);
   router:Router;
   allHotel : Array<Hotel> = [];


  constructor(hotelService:HotelAdminService,router:Router)
  
   {
    this.__hotelService=hotelService;
    this.allHotel = this.__hotelService.getHotelArr();
    this.router =  router;
    console.log(this.allHotel.length);
    
  }
  submitForm(){
    this.__hotelService.addHotel(this.h)
    console.log("form submit button clicked")
    console.log(this.h);
   }


}