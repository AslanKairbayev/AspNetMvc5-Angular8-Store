var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Cart } from '../model/cart.model';
import { ShippingDetails } from '../model/shipping.details.model';
import { ProductRepository } from '../model/product.repository';
var CheckoutComponent = /** @class */ (function () {
    function CheckoutComponent(repository, cart) {
        this.repository = repository;
        this.cart = cart;
        this.input = new ShippingDetails();
        this.orderSent = false;
    }
    CheckoutComponent.prototype.submit = function () {
        var _this = this;
        this.repository.checkout(this.input).subscribe(function () {
            _this.cart.clear();
            _this.orderSent = true;
        }, function (error) { _this.error = error.message; console.log(error); });
    };
    CheckoutComponent = __decorate([
        Component({
            selector: 'checkout-app',
            //styles: [`
            //    input.ng-touched.ng-invalid {border:solid red 2px;}
            //    input.ng-touched.ng-valid {border:solid green 2px;}
            //`],
            templateUrl: './checkout.component.html'
        }),
        __metadata("design:paramtypes", [ProductRepository, Cart])
    ], CheckoutComponent);
    return CheckoutComponent;
}());
export { CheckoutComponent };
//# sourceMappingURL=checkout.component.js.map