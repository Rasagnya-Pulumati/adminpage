import { Component } from '@angular/core';
import { HotelDTO } from '../hotel-dto';
import { HotelOperationService } from '../hotel-operation.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent {
  allHotels:HotelDTO[]=[];
  constructor(private hotelServive:HotelOperationService ){

   


  }//end of constructor

getByCity(cityName:string){
  this.hotelServive.getHotelsDetailsbyCity(cityName).subscribe(
    data=>{
      console.log("data :- "+data);
      
      this.allHotels = data;
    },err=>{
      console.log("error from spring ",err);

    } 
  );
}
getAllHotels(){
  this.hotelServive.getAllHotelsFromSpring().subscribe(
    data=>{
      console.log("data :- "+data);
      
      this.allHotels = data;
    },err=>{
      console.log("error from spring ",err);

    } 
  );

}

}
