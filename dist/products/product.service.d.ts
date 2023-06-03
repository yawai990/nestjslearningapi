import { Product } from "./product.model";
export declare class ProductService {
    products: Product[];
    InsertProdct(title: string, desc: string, price: number): any;
    getProducts(): String;
    getProduct(productID: String): string;
}
