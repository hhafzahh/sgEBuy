import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {
 // Created 2 variables headers and accessPointUrl.
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
 public retrieveAllProducts() {
   return this.http.get(this.baseUri + "Products", { headers: this.headers });
 }

public retrieveProductById(id: number) {
  console.log(this.baseUri + "Products/" + id)
  return this.http.get(this.baseUri + "Products/"  + id, { headers: this.headers });
  
}

//add new product C request- admin access
  //parameter payload encompasses the JSON representation of the new book which we are inserting into the database.
  // route = /api/Products
  public addNewProduct(

   // id: number,
    name: string,
    description: string,
    summary: string,
    imageFile: string,
    price: number,
    sellerName: string,
    stockNumber: number,
    categoryId: number
  ) 
  {
    return this.http.post(this.baseUri + "Products", {
      
      //  id: id,
        name: name,
        description: description,
        summary: summary,
        imageFile: imageFile,
        price: price,

        sellerName: sellerName,
        stockNumber: stockNumber,
        categoryId: categoryId,
   
      
    }, {
      headers: this.headers,
    });
  }
  //delete product request- admin access
  // parameter payload encompasses the id of the book which we are deleting
  // route = /api/Products/{id}
  public deleteProductById(id) {
    return this.http.delete(this.baseUri + 'Products/' + id, {
      headers: this.headers,
    });
  }
  // update product request - admin access
  // parameter payload encompasses the JSON representation of the book along with the id to identify which book to update in the database
  // route = /api/Products/{id}
  public updateProductById( 
     id: number,
    name: string,
    description: string,
    summary: string,
    imageFile: string,
    price: number,
    sellerName: string,
    stockNumber: number,
    categoryId: number
  ) {
    return this.http.put(this.baseUri + 'Products/' + id,{ 
      id: id,
      name: name,
      description: description,
      summary: summary,
      imageFile: imageFile,
      price: price,

      sellerName: sellerName,
      stockNumber: stockNumber,
      categoryId: categoryId,
    } , {
      headers: this.headers,
    });
  }

  //search products
public searchProducts(searchTerm){
  return this.http.get(this.baseUri  + "Products" + "/search?"+ "searchTerm="+searchTerm);
}

//filter products by category and/or by price range
public filterProducts (categoryId,minPrice,maxprice){
  //return this.http.get(this.baseUri  + "Products" + "/price?"
  //will do this later with a free mind :) 
}

}
