import { Controller,Get,Post, Param, Body} from "@nestjs/common";
import { ProductService } from "./product.service";
import { retry } from "rxjs";

@Controller('products')

export class ProductController{
     constructor(private productservice: ProductService ){}

     @Post()
     InsertProdct(
          @Body('title') producttitle:string,
          @Body('desc') productdesc:string,
          @Body('price') productprice:number,
     ):any{
      const message= this.productservice.InsertProdct(producttitle,productdesc,productprice);
      return message;
     }
     @Get()
     getProducts():String{
          return this.productservice.getProducts();
     }
     @Get(':id')
     getProduct(@Param('id') productID : String):String{
          return this.productservice.getProduct(productID);
     }
}