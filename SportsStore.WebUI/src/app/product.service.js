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
var ProductService = /** @class */ (function () {
    function ProductService(http) {
        this.http = http;
        this.url = "/api/products";
    }
    ProductService.prototype.getList = function (category, page) {
        if (category == null) {
            var params = new HttpParams().set('page', page.toString());
            ;
            return this.http.get('http://localhost:53753/Product/GetList', { params: params });
        }
        else {
            var params = new HttpParams().set('category', category).set('page', page.toString());
            ;
            return this.http.get('http://localhost:53753/Product/GetList', { params: params });
        }
    };
    ProductService.prototype.getCategories = function () {
        return this.http.get('http://localhost:53753/Admin/GetCategories');
    };
    ProductService.prototype.getProducts = function () {
        return this.http.get(this.url);
    };
    ProductService.prototype.createProduct = function (product) {
        return this.http.post(this.url, product);
    };
    ProductService.prototype.updateProduct = function (product) {
        return this.http.put(this.url, product);
    };
    ProductService.prototype.deleteProduct = function (id) {
        return this.http.delete(this.url + '/' + id);
    };
    ProductService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], ProductService);
    return ProductService;
}());
export { ProductService };
//# sourceMappingURL=product.service.js.map