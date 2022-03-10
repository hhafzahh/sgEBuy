import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private headers: HttpHeaders;
  /// this url should be amend to indicate port number and API URI accordingly.
  
  private baseUri: string = 'https://localhost:44335/gateway/';
 
  // injected HTTPClient into the component via the constructor,
  //  use the default headers variable to ensure all requests are of JSON type and of UTF-8 charset.
  constructor(private http: HttpClient) {
    //construct a header to ensure all request are of json type and utf-8 charset
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json; charset = urf-8',
    });
  }

  // HTTP Get Request
 public retrieveAllOrders() {
  return this.http.get(this.baseUri + "payments", { headers: this.headers });
}

public retrieveOrderById(id: number) {
 console.log(this.baseUri + "payments/" + id)
 return this.http.get(this.baseUri + "payments/"  + id, { headers: this.headers });
 
}

//add new order 
 public addNewOrder(payload: any) {
   return this.http.post(this.baseUri + "Orders/", payload, {
     headers: this.headers,
   });
 }
 //delete order
 public deleteOrderById(id: any) {
   return this.http.delete(this.baseUri + 'payments/' + id, {
     headers: this.headers,
   });
 }
 // update order request - admin access

 public updateOrderById(payload: any) {
   return this.http.put(this.baseUri + 'Orders/' + payload.id, payload, {
     headers: this.headers,
   });
 }

 public checkoutPayment(username:string,totalPrice:number,cardNumber:string,month:number,year:number,cvc:number,paymentType:string,productName:string,imageFile:string,email:string){
  return this.http.post(this.baseUri + 'payments' ,{
     username:username,
     totalPrice:totalPrice,
     cardNumber:cardNumber,
     month:month,
     year:year,
     cvc:cvc,
    
     paymentType:paymentType,
     productName:productName,
     imageFile:imageFile,
     email:email
  
   },{
     headers: this.headers
   })
 
//generate receipt in order component ts file :) 

  
}
}
