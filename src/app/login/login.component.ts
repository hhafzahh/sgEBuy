import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;
  results:any = false;
  validationUserMessage = {
    name:[  {type:'required',message:"Please enter your name!"},],
    email:[
      {type:'required',message:"Please enter your email!"},
      {type:'pattern',message:"Email entered is incorrect.Try Again!"}
    ],
    password:[
      {type:'required',message:"Please enter your password!"},
      {type:'minlength',message:"The password must be at least 5 characters or more"}
    ]
  }
  //dependency injection of FormBuilder as an object call fb
  constructor(private fb: FormBuilder,private authService:AuthService,private router:Router) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      name:new FormControl('',Validators.compose([
        Validators.required
      ])),
      email:new FormControl('',Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('',Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ])),

       
    })
}
onSubmit(){
  console.log('hi');
  console.log(this.myForm.value)
  //this.auth.authUser(this.myForm.value)
  
  this.authService.authUser(this.myForm.value.name,this.myForm.value.password).subscribe(data =>
    {
      this.results = data;
      console.log(this.results)
      console.log(this.results.token)
      if(this.results) {
        
        localStorage.setItem('username',this.myForm.value.name);
        localStorage.setItem('email',this.myForm.value.email);
        localStorage.setItem('access_token', this.results.token)
        localStorage.setItem('Role', this.results.role)
        location.reload();
        this.router.navigateByUrl('');
    

      }
      else{
        console.log("Wrong username or password");

      }

    });

}


}