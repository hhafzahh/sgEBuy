import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private headers: HttpHeaders;
 /// this url should be amend to indicate port number and API URI accordingly.
 
 private accessPointUrl: string = 'https://localhost:44335/gateway/';
 results:any = []
 NAME_KEY = 'username';
 TOKEN_KEY='access_token';
 EMAIL_KEY = 'email';


 
 // injected HTTPClient into the component via the constructor,
 //  use the default headers variable to ensure all requests are of JSON type and of UTF-8 charset.
 constructor(private http: HttpClient) {
   //construct a header to ensure all request are of json type and utf-8 charset
   this.headers = new HttpHeaders({
     'Content-Type': 'application/json; charset = urf-8',
   });
 }
 get name(){
  return localStorage.getItem(this.NAME_KEY)
  
}
get email(){
  return localStorage.getItem(this.EMAIL_KEY)
}
get isAuthenticated(){
  return !!localStorage.getItem(this.TOKEN_KEY);
  
}
public getAccessToken() {
  return localStorage.getItem('access_token');
}
 //create function to retrieve books with eStoreServices Web Api end point
 // HTTP Get Request
 public register(credentials) {
    this.http.post(this.accessPointUrl + "Authentication/register",credentials).subscribe(res =>{
      console.log(res)
     
   
    })
 }
 public registerAdmin(credentials){
   this.http.post(this.accessPointUrl + "Authentication/registerAdmin", credentials).subscribe(res=>{
     console.log(res)
   })
 }
 public authUser(username:string,pw:string){
  return this.http.post<any[]>(this.accessPointUrl + "Authentication/login",{'username':username,'password':pw})
 
}


/*
 regUser(user) {
  return this.http.post(this.accessPointUrl+ "/register",user).subscribe(data=>{
    this.results = data
    console.log(this.results[0])
    localStorage.setItem(this.TOKEN_KEY, this.results[0].token)
    localStorage.setItem(this.NAME_KEY, this.results[0].username)
  });
  }
*/
//search products
logout(){
  localStorage.removeItem(this.NAME_KEY);
  localStorage.removeItem(this.TOKEN_KEY);
  localStorage.removeItem("Role");
  window.location.reload();
}


public getAllUsers() {
  return this.http.get<any[]>(this.accessPointUrl + "customers",{ headers: this.headers });
}

public deleteUser(id) {
  return this.http.delete(this.accessPointUrl +"customers/" + id, {headers: this.headers});
}

  public addNewUser(payload: any) {
    return this.http.post(this.accessPointUrl +"customers", payload, {
      headers: this.headers,
    });
  }

  public retrieveUserById(payload: any) {
    return this.http.get(this.accessPointUrl + 'customers/' + payload.id, {
      headers: this.headers,
    });
  }
 
/* i did not create this route for my project part 1 -> as identity put did not go well as i thought :/
  public updateBookById(payload: any) {
    return this.http.put(this.accessPointUrl + '/' + payload.id, payload, {
      headers: this.headers,
    });
  }
  */


}

