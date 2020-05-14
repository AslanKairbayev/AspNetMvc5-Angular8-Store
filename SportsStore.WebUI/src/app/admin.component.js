var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { TemplateRef, ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';
var AdminComponent = /** @class */ (function () {
    function AdminComponent(serv) {
        this.serv = serv;
        this.products = new Array();
        this.categories = new Array();
    }
    AdminComponent.prototype.ngOnInit = function () {
        this.loadProducts();
        this.loadCategories();
    };
    AdminComponent.prototype.loadCategories = function () {
        var _this = this;
        this.serv.getCategories().subscribe(function (data) { _this.categories = data; }, function (error) { _this.error = error.message; console.log(error); });
    };
    AdminComponent.prototype.loadProducts = function () {
        var _this = this;
        this.serv.getProducts().subscribe(function (data) { _this.products = data; }, function (error) { _this.error = error.message; console.log(error); });
    };
    AdminComponent.prototype.addProduct = function () {
        if (!this.isNewRecord) {
            this.editedProduct = new Product();
            this.products.push(this.editedProduct);
            this.isNewRecord = true;
        }
    };
    AdminComponent.prototype.editProduct = function (product) {
        if (this.isNewRecord) {
            this.cancel();
        }
        this.editedProduct = new Product(product.Id, product.Name, product.Description, product.Price, product.Category);
    };
    AdminComponent.prototype.loadTemplate = function (product) {
        if (this.editedProduct && this.editedProduct.Id == product.Id) {
            return this.editTemplate;
        }
        else {
            return this.readOnlyTemplate;
        }
    };
    AdminComponent.prototype.saveProduct = function () {
        var _this = this;
        if (this.isNewRecord) {
            this.products.pop();
            this.serv.createProduct(this.editedProduct).subscribe(function (data) {
                _this.statusMessage = 'Data has been successfully added';
                _this.isNewRecord = false;
                _this.products.push(data);
            });
        }
        else {
            this.serv.updateProduct(this.editedProduct).subscribe(function (data) {
                _this.statusMessage = 'Data has been successfully updated';
                for (var i = 0; i < _this.products.length; i++) {
                    if (_this.products[i].Id == data.Id) {
                        _this.products.splice(i, 1, data);
                        break;
                    }
                }
            });
        }
        this.editedProduct = null;
    };
    AdminComponent.prototype.cancel = function () {
        if (this.isNewRecord) {
            this.products.pop();
            this.isNewRecord = false;
        }
        this.editedProduct = null;
    };
    AdminComponent.prototype.deleteProduct = function (product) {
        var _this = this;
        this.serv.deleteProduct(product.Id).subscribe(function (data) {
            _this.statusMessage = 'Data has been successfully deleted';
            for (var i = 0; i < _this.products.length; i++) {
                if (_this.products[i].Id == data) {
                    _this.products.splice(i, 1);
                    break;
                }
            }
        });
    };
    __decorate([
        ViewChild('readOnlyTemplate', { static: false }),
        __metadata("design:type", TemplateRef)
    ], AdminComponent.prototype, "readOnlyTemplate", void 0);
    __decorate([
        ViewChild('editTemplate', { static: false }),
        __metadata("design:type", TemplateRef)
    ], AdminComponent.prototype, "editTemplate", void 0);
    AdminComponent = __decorate([
        Component({
            selector: 'admin-app',
            //styles: [`
            //    input.ng-touched.ng-invalid {border:solid red 2px;}
            //    input.ng-touched.ng-valid {border:solid green 2px;}
            //`],
            templateUrl: './admin.component.html',
            providers: [ProductService]
        }),
        __metadata("design:paramtypes", [ProductService])
    ], AdminComponent);
    return AdminComponent;
}());
export { AdminComponent };
//# sourceMappingURL=admin.component.js.map