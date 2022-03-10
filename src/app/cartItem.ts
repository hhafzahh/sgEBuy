import { Productt } from "./Product";

//import { ProductDetailComponent } from "./product-detail/product-detail.component";} from './product-detail'
export class CartItem {

    id: number;
    productId: number;
    productName: string;
    quantity: number;
    price: number;
    shoppingCartId:number;

    constructor(id:number,product:Productt,qty = 1 ){
        this.id = id,
        this.productId = product.id;
        this.productName = product.name;
        this.price = product.price;
        this.quantity = qty;
        console.log(product)
        
        
    }
}

