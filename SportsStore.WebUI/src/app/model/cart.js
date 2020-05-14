var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
var Cart = /** @class */ (function () {
    function Cart() {
        this.lineCollection = new Array();
    }
    Cart.prototype.addItem = function (product, quantity) {
        var line = this.lineCollection.find(function (line) { return line.Product.Id == product.Id; });
        if (line == null) {
            this.lineCollection.push(new CartLine(product, quantity));
        }
        else {
            line.Quantity += quantity;
        }
    };
    Cart.prototype.removeLine = function (product) {
        var index = this.lineCollection.findIndex(function (i) { return i.Product.Id == product.Id; });
        this.lineCollection.splice(index, 1);
    };
    Cart.prototype.clear = function () {
        this.lineCollection.length = 0;
    };
    Cart.prototype.lines = function () {
        return this.lineCollection;
    };
    Cart.prototype.totalQuan = function () {
        var quan = 0;
        this.lineCollection.forEach(function (l) { quan += l.Quantity; });
        return quan;
    };
    Cart.prototype.totalSum = function () {
        var sum = 0;
        this.lineCollection.forEach(function (l) { sum += l.Quantity * l.Product.Price; });
        return sum;
    };
    Cart = __decorate([
        Injectable()
    ], Cart);
    return Cart;
}());
export { Cart };
var CartLine = /** @class */ (function () {
    function CartLine(Product, Quantity) {
        this.Product = Product;
        this.Quantity = Quantity;
    }
    return CartLine;
}());
export { CartLine };
//# sourceMappingURL=cart.js.map