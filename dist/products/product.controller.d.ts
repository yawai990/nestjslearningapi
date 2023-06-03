import { ProductService } from "./product.service";
export declare class ProductController {
    private productservice;
    constructor(productservice: ProductService);
    InsertProdct(producttitle: string, productdesc: string, productprice: number): any;
    getProducts(): String;
    getProduct(productID: String): String;
}
