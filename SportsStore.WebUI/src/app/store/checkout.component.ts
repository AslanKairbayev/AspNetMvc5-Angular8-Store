import { Component } from '@angular/core';
import { Cart } from '../model/cart.model';
import { ShippingDetails } from '../model/shipping.details.model';
import { ProductRepository } from '../model/product.repository';

@Component({
    selector: 'checkout-app',
    //styles: [`
    //    input.ng-touched.ng-invalid {border:solid red 2px;}
    //    input.ng-touched.ng-valid {border:solid green 2px;}
    //`],
    templateUrl: './checkout.component.html'
})

export class CheckoutComponent {
    constructor(private repository: ProductRepository, public cart: Cart) { }

    input: ShippingDetails = new ShippingDetails();

    orderSent: boolean = false;

    error: any;

    submit() {
        this.repository.checkout(this.input).subscribe(
            () => {
                this.cart.clear();
                this.orderSent = true;
            },
            error => { this.error = error.message; console.log(error); }
        );      

    }
}