
import { Injectable } from '@angular/core';
import { Hotel } from './hotel';

@Injectable({
  providedIn: 'root'
})
export class HotelOperationService {

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

  
  getHotelByNumber(searchHotelId:number):Hotel
  {
    let outputHotel:Hotel = new Hotel(0,'',0,'','','','',0,0);
    for(let i=0;i<this.hotelArr.length;i++)
    {
      let thisCourse:Hotel = this.hotelArr[i];
        if(thisCourse.hotelId == searchHotelId)
        {
          outputHotel = thisCourse;
          break;
        }
    }
    
    return outputHotel;
  }

  getHotelsByLocation(filterLocation:string):Hotel[]
  {
    // localhost:8080/api/course/{category}
   let outputArr:Hotel[] = [];

    this.hotelArr.forEach(h=>{
      if(h.location == filterLocation)
      {
        outputArr.push(h);
      }
    });

    return outputArr;
  }
}//end class