export class HotelDTO {
    hotelId:number;
    city:string;
    hotelName:string;
    address:string;

    constructor(
        hotelId:number,
        city:string,
        hotelName:string,
        address:string

    )
    {
        this.hotelId=hotelId;
        this.city=city;
        this.hotelName=hotelName;
        this.address=address
    }
}
