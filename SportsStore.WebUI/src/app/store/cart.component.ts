import { Component} from '@angular/core';
import { Cart } from '../model/cart.model';
import { Product } from '../model/product.model';

@Component({
    selector: 'cart-app',
    templateUrl: './cart.component.html'
})

export class CartComponent {
    constructor(public cart: Cart) { }   

    removeFromCart(product: Product) {
        this.cart.removeLine(product);
    }
}