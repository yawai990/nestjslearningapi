import { Injectable, NotFoundException } from "@nestjs/common";
import { Product } from "./product.model";
@Injectable()

export class ProductService{
     products:Product[] = [];

     InsertProdct(title:string, desc:string,price:number):any{
          const id = Date.now();
          const newproduct =new Product(id,title,desc,price);
          this.products.push(newproduct);
          return "new product added";
     }
     getProducts():String{
          return "get products";
     }
     getProduct(productID:String){
          const product :boolean = true;
          if(!product){
               throw new NotFoundException('could not find products')
          }
          return 'get product'+productID;
     }
}