import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

import { MessageService } from '../message.service';
import { ProductsServiceService } from '../products-service.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})


export class ProductDetailComponent implements OnInit {
  email:any
  id:number;
  username:any;
cartId:any = [];
  //product = new Product();
  products:any =[];
  private sub:any;
  constructor(private route:ActivatedRoute,private router:Router,private productService:ProductsServiceService,private msg: MessageService,private auth:AuthService) { 
    this.username = this.auth.name
    this.sub = this.route.params.subscribe(params => {
      this.id = + params['id']; // + converts string 'id' to a number
      console.log(this.id)
      this.productService.retrieveProductById(this.id).subscribe((products)=>{
        this.products = products
        
        console.log(products)
      })
      

      
    });
    

  }
  ngOnInit(): void {}

  inputnumber = 0;
  
  plus()
  {
   this.inputnumber = this.inputnumber+1;
  }
  minus()
  {
    if(this.inputnumber != 0)
  {
   this.inputnumber = this.inputnumber-1;
  }
}


addToCart(){
 
  console.log(this.products)
/*
this.product.id = this.id,
this.product.name = this.products.name,
this.product.description = this.products.description,
this.product.summary = this.products.summary,
this.product.imageFile = this.products.imageFile,
this.product.price = this.products.price,
this.product.sellerName = this.products.sellerName,
this.product.stockNumber = this.products.stockNumber,
this.product.categoryId = this.products.categoryID
*/

}

handleAddToCart(){
    this.msg.sendMsg(this.products);
    this.router.navigate(['/payment', this.products.id]);

   
   



}
}