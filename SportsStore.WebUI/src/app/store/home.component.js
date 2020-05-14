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
import { ProductRepository } from '../model/product.repository';
import { Router } from '@angular/router';
import { ProductsListViewModel } from '../model/products.list.view.model';
import { Cart } from '../model/cart.model';
var HomeComponent = /** @class */ (function () {
    function HomeComponent(repository, router, cart) {
        this.repository = repository;
        this.router = router;
        this.cart = cart;
        this.model = new ProductsListViewModel();
        this.categories = new Array();
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.loadList('all', 1);
        this.loadCategories();
        this.cart.loadCart();
    };
    HomeComponent.prototype.select = function (category) {
        this.router.navigate([category]);
    };
    HomeComponent.prototype.loadCategories = function () {
        var _this = this;
        this.repository.getCategories().subscribe(function (data) { _this.categories = data; }, function (error) { _this.error = error.message; console.log(error); });
    };
    HomeComponent.prototype.loadList = function (category, page) {
        var _this = this;
        if (category === void 0) { category = 'all'; }
        if (page === void 0) { page = 1; }
        this.repository.getList(category, page).subscribe(function (data) {
            _this.model = data;
            _this.totalPages = new Array();
            for (var i = 1; i <= data.PagingInfo.TotalPages; i++) {
                _this.totalPages.push(i);
            }
        }, function (error) { _this.error = error.message; console.log(error); });
    };
    HomeComponent.prototype.addItemToCart = function (product) {
        this.cart.addItem(product);
    };
    HomeComponent = __decorate([
        Component({
            selector: 'home-app',
            templateUrl: './home.component.html'
        }),
        __metadata("design:paramtypes", [ProductRepository, Router, Cart])
    ], HomeComponent);
    return HomeComponent;
}());
export { HomeComponent };
//# sourceMappingURL=home.component.js.map