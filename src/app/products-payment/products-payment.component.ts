import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

import { MessageService } from '../message.service';
import { OrderService } from '../order.service';
import { Productt } from '../Product';
import { ProductsServiceService } from '../products-service.service';

@Component({
  selector: 'app-products-payment',
  templateUrl: './products-payment.component.html',
  styleUrls: ['./products-payment.component.css']
})
export class ProductsPaymentComponent implements OnInit {
  results:any ;
  
  customerID:any;
  name:string;
  price:number;
  image:any;
  items:any =[];
  email:string;
  quantity:number;
  products = [];
  username:any;
  submitted:boolean;
  tokenMsg:string;
  formProcess:boolean;
  sub:any;
  id:number;
 
  
  myForm:FormGroup;
  validationUserMessage = {
    fullname:[  {type:'required',message:"Please enter your full name!"},],
    email:[
      {type:'required',message:"Please enter your email!"},
      {type:'pattern',message:"Email entered is incorrect.Try Again!"}
    ],
    address:[
      {type:'required',message:"Please enter your address!"},
    ],
    city:[
      {type:'required',message:"Please enter your city!"},
    ],
    state:[
      {type:'required',message:"Please enter your city!"},
    ],
    zip:[
      {type:'required',message:"Please enter your zip!"},
    ],
    cardname:[
      {type:'required',message:"Please enter your card name!"},
    ],
    cardnumber:[
      {type:'required',message:"Please enter your card number!"},
    ],
    expmonth:[
      {type:'required',message:"Please enter your card expiry month!"},
    ],
    expyear:[
      {type:'required',message:"Please enter your card expiry year!"},
    ],
    cvv:[
      {type:'required',message:"Please enter your card cvv!"},
    ],
  }
  
  constructor(private fb:FormBuilder,private orderService:OrderService,private productService:ProductsServiceService,private route:ActivatedRoute,private msg:MessageService,private auth:AuthService,private router:Router) {
this.username = this.auth.name;
this.email = this.auth.EMAIL_KEY;
this.sub = this.route.params.subscribe(params => {
  this.id = + params['id']; // + converts string 'id' to a number
  console.log(this.id)
  this.productService.retrieveProductById(this.id).subscribe((items)=>{
    this.items = items 
    console.log(items)


  })
  })
}

  ngOnInit() {
  
    
   
    


    this.myForm = this.fb.group({
      fullname:new FormControl('',Validators.compose([
        Validators.required
      ])),
      email:new FormControl('',Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      address: new FormControl('',Validators.compose([
        Validators.required,

      ])),
      city: new FormControl('',Validators.compose([
        Validators.required,

      ])),
      state: new FormControl('',Validators.compose([
        Validators.required,

      ])),
      zip: new FormControl('',Validators.compose([
        Validators.required,

      ])),
      cardname: new FormControl('',Validators.compose([
        Validators.required,

      ])),
      cardnumber: new FormControl('',Validators.compose([
        Validators.required,

      ])),
      expmonth: new FormControl('',Validators.compose([
        Validators.required,

      ])),
      expyear: new FormControl('',Validators.compose([
        Validators.required,

      ])),
      cvv: new FormControl('',Validators.compose([
        Validators.required,

      ])),
      
       
    })
  }


  onSubmit(){
    console.log(this.myForm.value)
    
//(method) OrderService.checkoutPayment(username: string, totalPrice: string, cardNumber: string, month: number, year: number, cvc: number, customerId: number, paymentType: string): Observable<Object>
 this.orderService.checkoutPayment(this.username,this.items.price,this.myForm.value.cardnumber,this.myForm.value.expmonth,this.myForm.value.expyear, this.myForm.value.cvc,"VISA",this.items.name,this.items.imageFile,this.email).subscribe((res)=>{
    console.log(res)
  })


   
  
  }



}