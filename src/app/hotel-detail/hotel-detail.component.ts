import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Hotel } from '../hotel';
import { HotelOperationService } from '../hotel-operation.service';
import { InfoPipe } from '../info-pipe';
@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.css']
})
export class HotelDetailComponent {


  __hotelService:HotelOperationService; // creating object of Service layer
  router:Router;
  activeRoute:ActivatedRoute;
  h:Hotel = new Hotel(0,'',0,'','','','',0,0);
    constructor(hotelService:HotelOperationService,router:Router,activeRoute:ActivatedRoute)
  {
    this.__hotelService = hotelService;
    this.router = router;
    this.activeRoute = activeRoute;

    let searchHotelId= this.activeRoute.snapshot.params['hid']; // extract value from prameter(URI)
    console.log(searchHotelId);
    this.h = this.__hotelService.getHotelByNumber(parseInt(searchHotelId)); // get data from service class
    console.log(this.h);
  }

}

