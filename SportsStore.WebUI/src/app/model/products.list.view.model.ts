import { Product } from "./product.model";
import { PagingInfo } from "./paging.info.model";

export class ProductsListViewModel {
    constructor(
        public Products?: Array<Product>,
        public PagingInfo?: PagingInfo,
        public CurrentCategory?: string  
    ) { }            
}