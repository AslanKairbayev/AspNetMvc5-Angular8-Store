import { TemplateRef, ViewChild, ElementRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product.model';
import { ProductRepository } from '../model/product.repository';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { NgForOf } from '@angular/common';

@Component({
    selector: 'admin-app',
    //styles: [`
    //    input.ng-touched.ng-invalid {border:solid red 2px;}
    //    input.ng-touched.ng-valid {border:solid green 2px;}
    //`],
    templateUrl: './admin.component.html',
    providers: [ProductRepository]
})
export class AdminComponent implements OnInit {
    @ViewChild('readOnlyTemplate', { static: false }) readOnlyTemplate: TemplateRef<any>;
    @ViewChild('editTemplate', { static: false }) editTemplate: TemplateRef<any>;

    editedProduct: Product;
    products: Array<Product>;
    isNewRecord: boolean;
    statusMessage: string;
    error: any;
    categories: Array<string>; 

    constructor(private repository: ProductRepository) {
        this.products = new Array<Product>();
        this.categories = new Array<string>();
    }

    ngOnInit() {
        this.loadProducts();
        this.loadCategories();
    }

    private loadCategories() {
        this.repository.getCategories().subscribe(
            (data: string[]) => { this.categories = data; },
            error => { this.error = error.message; console.log(error); }
        );
    }

    private loadProducts() {
        this.repository.getProducts().subscribe(
            (data: Product[]) => { this.products = data; },
            error => { this.error = error.message; console.log(error); }
        );
    }

    addProduct() {
        if (!this.isNewRecord) {
            this.editedProduct = new Product();
            this.products.push(this.editedProduct);
            this.isNewRecord = true;
        }        
    }

    editProduct(product: Product) {
        if (this.isNewRecord) {
            this.cancel();
        }
        this.editedProduct = new Product(product.Id, product.Name, product.Description, product.Price, product.Category);
    }

    loadTemplate(product: Product) {
        if (this.editedProduct && this.editedProduct.Id == product.Id) {
            return this.editTemplate;
        } else {
            return this.readOnlyTemplate;
        }
    }

    saveProduct() {
        if (this.isNewRecord) {
            this.products.pop();
            this.repository.createProduct(this.editedProduct).subscribe(
                (data: Product) => {
                    this.statusMessage = 'Data has been successfully added';
                    this.isNewRecord = false;
                    this.products.push(data);
                });
        } else {
            this.repository.updateProduct(this.editedProduct).subscribe(
                (data: Product) => {
                    this.statusMessage = 'Data has been successfully updated';
                    for (var i = 0; i < this.products.length; i++) {                     
                        if (this.products[i].Id == data.Id) {
                            this.products.splice(i, 1, data);
                            break;
                        }                              
                    }                                       
                });
        }
        this.editedProduct = null;
    }

    cancel() {
        if (this.isNewRecord) {
            this.products.pop();
            this.isNewRecord = false;
        }
        this.editedProduct = null;
    }

    deleteProduct(product: Product) {        
        this.repository.deleteProduct(product.Id).subscribe(
            (data: number) => {
                this.statusMessage = 'Data has been successfully deleted';
                for (var i = 0; i < this.products.length; i++) {
                    if (this.products[i].Id == data) {
                    this.products.splice(i, 1);
                    break;
                }
            } 
        });
    }
}