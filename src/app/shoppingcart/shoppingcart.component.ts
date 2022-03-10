import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

import { MessageService } from '../message.service';
import { Productt } from '../Product';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {
/*username:any;
cartItems = [ ];
cartTotal:number;
  constructor(private msg:MessageService,private cartService:CartService,private auth:AuthService) {
    this.username = this.auth.name
   }

  ngOnInit(): void {
    this.cartService.getSpecificCart(this.username).subscribe((res)=>{
     console.log(res)
    })
    this.msg.getMsg().subscribe((product:Productt) => {

      this.cartService.createShoppingCart(this.username,"hafsahhussain.aha@gmail.com",0,product.name,product.id,1, "2021-12-10","2021-12-10").subscribe((res)=>{
        console.log(res)
        this.cartItems.push({
          name: product.name,
          quantity: 1,
          price: product.price
     
     
        })
        this.cartTotal = 0
         this.cartItems.forEach(item => {
           this.cartTotal += (item.quantity * item.price)
         })
      }
      
      
      )}*/
      ngOnInit(): void {}
    }

    

    
