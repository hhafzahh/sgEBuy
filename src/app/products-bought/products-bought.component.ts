import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../auth.service';
import { OrderService } from '../order.service';
import { Receipt } from '../receipt';

@Component({
  selector: 'app-products-bought',
  templateUrl: './products-bought.component.html',
  styleUrls: ['./products-bought.component.css']
})
export class ProductsBoughtComponent implements OnInit {
  bookings: any = [];
  receipt = new Receipt();
  data:any;
  username:any;
  item:any;
  email:any;

  valid:boolean = false;
  constructor(private bookingService:OrderService,private auth:AuthService,private modalService:NgbModal) {
    this.username = this.auth.name;
    console.log(this.auth.name)
    this.email = this.auth.email;
    this.bookingService.retrieveAllOrders().subscribe((bookings)=>{
      console.log(bookings)
        this.bookings  = bookings;
        console.log(bookings)
        for(let i =0; i<this.bookings.length; i++){
          console.log(this.bookings[i].username)
          if(this.bookings[i].username == this.auth.name ){
            this.item = this.bookings[i]
            console.log(this.bookings[i]);
            
          }
     
    }
    })
   }

  ngOnInit(): void {
  }
  //creating a deleteBooking(id) function that calls the injected bookingsService's deleteBooking() function
  deleteBooking(id) {
    this.bookingService.deleteOrderById(id).subscribe((results) => {
      location.reload();
    });
  }
  open(content) {
    this.modalService.open(content, { centered: true });
  }
  
  view(id){
    this.bookingService.retrieveOrderById(id).subscribe((results)=>{
      this.data = results
      console.log(this.data)
    })
    
  }
  

}
