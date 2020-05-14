import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product.model';
import { ProductRepository } from '../model/product.repository';
import { Router } from '@angular/router';
import { ProductsListViewModel } from '../model/products.list.view.model';
import { Cart} from '../model/cart.model';

@Component({
    selector: 'home-app',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
    model: ProductsListViewModel;
    categories: Array<string>;
    error: any;
    totalPages: Array<number>;

    constructor(private repository: ProductRepository, private router: Router, private cart: Cart) {
        this.model = new ProductsListViewModel();
        this.categories = new Array<string>();        
    }

    ngOnInit() {
        this.loadList('all', 1);
        this.loadCategories();
        this.cart.loadCart();
    }

    select(category: string) {
        this.router.navigate([category]);
    }

    private loadCategories() {
        this.repository.getCategories().subscribe(
            (data: string[]) => { this.categories = data; },
            error => { this.error = error.message; console.log(error); }
        );
    }

    private loadList(category: string = 'all', page: number = 1) {
        this.repository.getList(category, page).subscribe(
            (data: ProductsListViewModel) => { 
                this.model = data;
                this.totalPages = new Array<number>();
                for (let i = 1; i <= data.PagingInfo.TotalPages; i++) {
                    this.totalPages.push(i);
                }
            },
            error => { this.error = error.message; console.log(error); }
        );
    }    

    addItemToCart(product: Product) {
        this.cart.addItem(product);
    }
}