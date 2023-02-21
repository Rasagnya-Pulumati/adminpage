import { Injectable } from '@angular/core';
import { Hotel } from './hotel';
@Injectable({
  providedIn: 'root'
})
export class HotelAdminService {

  constructor() { }
  hotelArr:Hotel[] = [];

  addHotel(hotelFromUser:Hotel)
  {
    
    this.hotelArr.push(hotelFromUser); 
    console.log("Inside Hotel Service : Hotel Added "+hotelFromUser.hotelId);
    console.log(" Total Hotel Are :- "+this.hotelArr.length);
    
  }
  getHotelArr():Hotel[]
  {
    return this.hotelArr;
  }
}
