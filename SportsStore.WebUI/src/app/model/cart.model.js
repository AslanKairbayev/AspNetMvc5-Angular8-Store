var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { ProductRepository } from './product.repository';
var Cart = /** @class */ (function () {
    function Cart(repository) {
        this.repository = repository;
        this.lineCollection = new Array();
    }
    Cart.prototype.loadCart = function () {
        var _this = this;
        this.repository.getCart().subscribe(function (data) {
            if (data != null)
                _this.lineCollection = data;
        });
    };
    Cart.prototype.addItem = function (product) {
        var _this = this;
        this.repository.addToCart(product).subscribe(function (data) {
            var line = _this.lineCollection.find(function (line) { return line.Product.Id == data.Product.Id; });
            if (line == null) {
                _this.lineCollection.push(data);
            }
            else {
                line.Quantity += 1;
            }
        });
    };
    Cart.prototype.removeLine = function (product) {
        var _this = this;
        this.repository.deleteFromCart(product.Id).subscribe(function (data) {
            var index = _this.lineCollection.findIndex(function (i) { return i.Product.Id == data; });
            _this.lineCollection.splice(index, 1);
        });
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
        Injectable(),
        __metadata("design:paramtypes", [ProductRepository])
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
//# sourceMappingURL=cart.model.js.map