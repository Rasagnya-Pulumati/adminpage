
import { Injectable } from '@angular/core';
import { Hotel } from './hotel';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HotelDTO } from './hotel-dto';

@Injectable({
  providedIn: 'root'
})
export class HotelOperationService {

  baseURL:string = 'http://localhost:2004';
  hotelByCityEndPoint:string=this.baseURL+'/Hotel/city';
  allHotelEndpoint = this.baseURL+'/Hotel/hotels';
  hotelArr:Hotel[] = [];

  constructor(private http:HttpClient) { 
    console.log("Inside Constructor "+this.hotelByCityEndPoint);
  }
  
  

  getHotelsDetailsbyCity(city:string):Observable<HotelDTO[]>{
    console.log("Inside Method 1 "+this.hotelByCityEndPoint);
    this.hotelByCityEndPoint=this.hotelByCityEndPoint+'/'+city;
    console.log("After adding city 2 "+this.hotelByCityEndPoint);

    return this.http.get<HotelDTO[]>(`${this.hotelByCityEndPoint}`);
  }

  getAllHotelsFromSpring():Observable<HotelDTO[]>
  {
    console.log("inside service : "+this.allHotelEndpoint);
      return this.http.get<HotelDTO[]>(`${this.allHotelEndpoint}`);
  }


}//end class
