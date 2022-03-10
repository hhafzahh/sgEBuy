import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register-admin',
  templateUrl: './register-admin.component.html',
  styleUrls: ['./register-admin.component.css']
})
export class RegisterAdminComponent implements OnInit {

  myForm: FormGroup;
 
  validationUserMessage = {
    address: [{ type: 'required', message: 'Please enter your address!' }],
    ProfilePicture: [{ type: 'required', message: 'Please enter your profile Picture!' }],
    mobileNumber: [
      { type: 'required', message: 'Please enter your phone number!' },
    ],
    email: [
      { type: 'required', message: 'Please enter your email!' },
      { type: 'pattern', message: 'Email entered is incorrect.Try Again!' },
    ],
    username:[
      {type:'required',message:'Please enter your username'},
    ],
    role: [
      { type: 'required', message: 'Please enter your role!' },
    ],
    password: [
      { type: 'required', message: 'Please enter your password!' },
    ],
    /*
    pwSet: [
      { type: 'notmatch', message: 'Password does not match!' },
      { type: 'required', message: 'Please enter your password!' },
      {
        type: 'minlength',
        message: 'The password must be at least 5 characters or more',
      },
    
    ],*/
  };
  //dependency injection of FormBuilder as an object call fb
  constructor(private fb: FormBuilder,private auth:AuthService) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      address: new FormControl('', Validators.compose([Validators.required])),
      ProfilePicture: new FormControl('', Validators.compose([Validators.required])),
      mobileNumber: new FormControl('', Validators.compose([Validators.required])),
      username: new FormControl('',Validators.compose([Validators.required])),
      email: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
        ])
      ),
      role: new FormControl('',Validators.compose([Validators.required])),
      
   /*   pwSet: this.fb.group(
        {
          password: new FormControl(
            
            '',Validators.compose(
            [
              Validators.required,
              Validators.minLength(8),
             
            ]),
          ),
          retype: new FormControl('',Validators.compose([Validators.required])),
        },
        // where did this "validators" come?
        { validators: passwordMatchValidator }
      ),*/
      password: new FormControl('',Validators.compose([Validators.required])),
    });
  }

  onSubmit() {
    console.log('hi');
    console.log(this.myForm.value)
     this.auth.registerAdmin(this.myForm.value)
  }

}
