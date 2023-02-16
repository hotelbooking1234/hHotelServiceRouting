import { Component } from '@angular/core';

import { Hotel } from '../hotel';
import { HotelOperationService } from '../hotel-operation.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { InfoPipe } from '../info-pipe';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
   // no need to write @Autowire bcoz service class is already @Injectable
  __hotelService:HotelOperationService; // creating object of Service layer
  router:Router;
  
  allHotel : Array<Hotel> = [];
  wishList : Array<Hotel> = [];
  wishlistCount:number=0 ;

  priceHighCss:string = "color:crimson";
  priceLowCss:string = "color:rgb(8, 112, 63);font-weight: 700;";
  priceNormalCSS:string = "color:black";

  constructor(hotelService:HotelOperationService,router:Router)
  {
    this.__hotelService = hotelService;
    this.allHotel = this.__hotelService.getHotelArr();
    this.router = router;
    console.log(this.allHotel.length);
  }

  viewHotelDetails(hid:string)
  {
    
    this.router.navigate(['hotelDetail',hid]);
  }



  goForBook(hotel:string)
  {
    let hotelId = parseInt((hotel));
    console.log(" code to buy "+(hotelId+" hotel"));
    
  }

  addWishlist(hotel:string)
  {
    let addHotelId = parseInt(hotel);
    
    this.allHotel.forEach(h=>{
      if(h.hotelId == addHotelId)
      {
        this.wishList.push(h);
        
      }
    });
    this.wishlistCount = this.wishList.length;
    console.log(this.wishList);
    
  }

  getFilterData(filterValue:string)
  {
    console.log(" Filter Value "+filterValue);

    this.allHotel = this.__hotelService.getHotelsByLocation(filterValue);
  }


}//end class


