import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Product } from './product.model';
import { ShippingDetails } from './shipping.details.model';

@Injectable()
export class ProductRepository {

    private urlAdmin = "/api/admin";

    constructor(private http: HttpClient) { }    

    //HomeController
    getList(category: string, page: number) {
        const params = new HttpParams().set('category', category).set('page', page.toString());
        return this.http.get('http://localhost:53753/Cart/GetList', { params });               
    }

    getCategories() {
        return this.http.get('http://localhost:53753/Cart/GetCategories');
    }


    //CartController
    getCart() {
        return this.http.get('http://localhost:53753/Cart/GetCart');
    }

    addToCart(product: Product) {
        const body = {Id: product.Id}
        return this.http.post('http://localhost:53753/Cart/AddToCart', body);
    }

    deleteFromCart(id: number) {    
        return this.http.delete('http://localhost:53753/Cart/RemoveFromCart' + '/' + id);
    }

    checkout(shippingDetails: ShippingDetails) {
        return this.http.patch('http://localhost:53753/Cart/Checkout', shippingDetails);
    }


    //ApiController
    getProducts() {
        return this.http.get(this.urlAdmin);
    }

    createProduct(product: Product) {
        return this.http.post(this.urlAdmin, product);
    }

    updateProduct(product: Product) {
        return this.http.put(this.urlAdmin, product);
    }

    deleteProduct(id: number) {
        return this.http.delete(this.urlAdmin + '/' + id);
    }
}