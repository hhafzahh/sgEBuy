import { Component, OnInit } from '@angular/core';
import { ProductsServiceService } from '../products-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cdMsg: string;
  userRole:any;
  SortbyParam = '';
  SortDirection = 'asc';
  public productlist: Array<any> = []
  
  constructor(private productService: ProductsServiceService) { }

  
  ngOnInit(): void {
    this.productService.retrieveAllProducts().subscribe((data: any) => {
      this.productlist = data;
      console.log(this.productlist)
    });
    this.userRole = localStorage.getItem('Role')
    console.log(this.userRole)
  }
  search(){
    this.productService.searchProducts(this.cdMsg).subscribe((data:any) => {
      this.productlist = data;
      console.log(data);
    })
  }
  clear(){
    this.cdMsg = ''
    this.productService.searchProducts(this.cdMsg).subscribe((data:any) => {
      this.productlist = data;
      console.log(data);
    })
  }

  deleteProduct(id:number){
    this.productService.deleteProductById(id).subscribe((data)=>{
      console.log(data);
    
    })
    location.reload()
  }

  onSortDirection(){
    if(this.SortDirection === 'desc'){
      this.SortDirection = 'asc';
    }
    else{
      this.SortDirection = 'desc';
    }
  }

}
