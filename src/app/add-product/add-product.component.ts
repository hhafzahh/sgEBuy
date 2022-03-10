import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { ProductsServiceService } from '../products-service.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  
//array for images
images: any = [];
products:any;
//create formGroup object called myForm
myForm: FormGroup;
validationUserMessage = {
  name: [{ type: 'required', message: 'Please enter the name' }],
  description: [
    {
      type: 'required',
      message: 'Please enter the description of the product',
    },
  ],
  summary: [
    { type: 'required', message: 'Please enter the summary of product' },
  ],
  imageFile: [
    {
      type: 'required',
      message: 'Please enter the product url image!',
    },
  ],
price: [
    { type: 'required', message: 'Please enter the price of the product'},
  ],
 sellerName: [
    {
      type: 'required',
      message: 'Please enter the seller name of the product!',
    },
  ],
  stockNumber: [
    {
      type: 'required',
      message: 'Please enter the number of stocks left for the product ',
    },
  ],

  categoryId: [
    { type: 'required', message: 'Please enter the category Id of this product ' },
  ],
  
};
constructor(
  //dependency injection of FormBuilder as an object call fb
  private fb: FormBuilder,
  private auth: AuthService,
  private productService: ProductsServiceService
) {}

ngOnInit() { 
  //Construct the FormGroup object using FormBuilder with Validators
  this.myForm = this.fb.group({
    id: new FormControl('', Validators.compose([Validators.required])),
    name: new FormControl('', Validators.compose([Validators.required])),
    description: new FormControl(
      '',
      Validators.compose([Validators.required])
    ),
    summary: new FormControl(
      '',
      Validators.compose([Validators.required])
    ),

    imageFile: new FormControl(
      '',
      Validators.compose([Validators.required])
    ),
    price: new FormControl(
      '',
      Validators.compose([Validators.required])
    ),
    sellerName: new FormControl(
      '',
      Validators.compose([Validators.required])
    ),
    stockNumber: new FormControl(
      '',
      Validators.compose([Validators.required])
    ),
    categoryId: new FormControl(
      '',
      Validators.compose([Validators.required])
    )
  });
}

onSubmit() {
  console.log(this.myForm.value)
 //add product using products Service
  this.productService
    .addNewProduct(
   
      this.myForm.value.name,
      this.myForm.value.description,
      this.myForm.value.summary,
      this.myForm.value.imageFile,
      this.myForm.value.price,
      this.myForm.value.sellerName,
      this.myForm.value.stockNumber,
      this.myForm.value.categoryId,
    )
    .subscribe((data) => {
      this.products = data;
      console.log(this.products);
    });

}
}


