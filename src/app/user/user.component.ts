import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ModalDismissReasons,NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
export class User {
  constructor(
    public id,
    public username: string,
    public email: string,
    public password: string,
    public mobileNumber: string,
    public ProfilePicture: string,
    public address: string,

    public role: string
  ) {
  }
}
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 users:any;
 closeResult:string;
 myForm:FormGroup;
 editForm:FormGroup;
 results:any;
  constructor(private userService:AuthService,private modalService:NgbModal,private fb:FormBuilder) { 
    this.userService.getAllUsers().subscribe(data => {
      this.users = data;
      console.log(this.users)
   })
  }

  ngOnInit(): void {
  this.myForm = this.fb.group({
      username: new FormControl('', Validators.compose([Validators.required])),
    email: new FormControl('', Validators.compose([Validators.required])),
    password: new FormControl('', Validators.compose([Validators.required])),
    mobileNumber: new FormControl('', Validators.compose([Validators.required])),
    ProfilePicture: new FormControl('', Validators.compose([Validators.required])),
    address: new FormControl('', Validators.compose([Validators.required])),
    role: new FormControl('', Validators.compose([Validators.required])),
    });
    
 
  /*  this.editForm = this.fb.group({
    id: [''],
    username: new FormControl('', Validators.compose([Validators.required])),
    email: new FormControl('', Validators.compose([Validators.required])),
    password: new FormControl('', Validators.compose([Validators.required])),
    mobileNumber: new FormControl('', Validators.compose([Validators.required])),
    ProfilePicture: new FormControl('', Validators.compose([Validators.required])),
    address: new FormControl('', Validators.compose([Validators.required])),
    role: new FormControl('', Validators.compose([Validators.required])),
    });*/
  
  }
  
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  onSubmit(){
    this.userService.addNewUser(this.myForm.value).subscribe((data)=>{
      this.results = data;
      console.log(this.results)
      
    })
    this.modalService.dismissAll();//dismiss modal
    location.reload()
  }

  deleteU(id){
    this.userService.deleteUser(id).subscribe((data)=>{
      location.reload();
      console.log(data)
      console.log(id)
    });
  }

  /*
  delete(id){
    this.userService.deleteUser(id).subscribe((data)=>{
      location.reload();
      console.log(id)
    });
  }*/

  /*
  openEdit(targetModal, user: User) {
    this.modalService.open(targetModal, {
      backdrop: 'static',
      size: 'lg'
    });
    this.editForm.patchValue( {
      id : user.id,
      username: user.username,
      email: user.email,
      password: user.password,
      mobileNumber: user.mobileNumber,
      ProfilePicture: user.ProfilePicture,
      address:user.address,
      role:user.role
    });
  }
  onSave(){
    this.modalService.dismissAll();//dismiss modal
    this.userService.(this.editForm.value).subscribe((data)=>{
    this.results = data;
    
    })

    
  } */
/*
  delete(id){
     this.userService.deleteUser(id).subscribe((data)=>{
       location.reload();
       console.log(id)
     });
   }*/

   
}