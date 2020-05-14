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
import { HttpClient, HttpParams } from '@angular/common/http';
var ProductRepository = /** @class */ (function () {
    function ProductRepository(http) {
        this.http = http;
        this.urlAdmin = "/api/admin";
    }
    //HomeController
    ProductRepository.prototype.getList = function (category, page) {
        var params = new HttpParams().set('category', category).set('page', page.toString());
        return this.http.get('http://localhost:53753/Cart/GetList', { params: params });
    };
    ProductRepository.prototype.getCategories = function () {
        return this.http.get('http://localhost:53753/Cart/GetCategories');
    };
    //CartController
    ProductRepository.prototype.getCart = function () {
        return this.http.get('http://localhost:53753/Cart/GetCart');
    };
    ProductRepository.prototype.addToCart = function (product) {
        var body = { Id: product.Id };
        return this.http.post('http://localhost:53753/Cart/AddToCart', body);
    };
    ProductRepository.prototype.deleteFromCart = function (id) {
        return this.http.delete('http://localhost:53753/Cart/RemoveFromCart' + '/' + id);
    };
    ProductRepository.prototype.checkout = function (shippingDetails) {
        return this.http.patch('http://localhost:53753/Cart/Checkout', shippingDetails);
    };
    //ApiController
    ProductRepository.prototype.getProducts = function () {
        return this.http.get(this.urlAdmin);
    };
    ProductRepository.prototype.createProduct = function (product) {
        return this.http.post(this.urlAdmin, product);
    };
    ProductRepository.prototype.updateProduct = function (product) {
        return this.http.put(this.urlAdmin, product);
    };
    ProductRepository.prototype.deleteProduct = function (id) {
        return this.http.delete(this.urlAdmin + '/' + id);
    };
    ProductRepository = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], ProductRepository);
    return ProductRepository;
}());
export { ProductRepository };
//# sourceMappingURL=product.repository.js.map