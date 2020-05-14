import { Injectable } from '@angular/core';
import { Product } from "./product.model";
import { ProductRepository } from './product.repository';

@Injectable()
export class Cart {

    private lineCollection: Array<CartLine>;

    constructor(private repository: ProductRepository) {
        this.lineCollection = new Array<CartLine>();
    }    

    public loadCart() {
        this.repository.getCart().subscribe(
            (data: Array<CartLine>) => {
                if (data != null)
                this.lineCollection = data;
            }
        );
    }

    public addItem(product: Product) {
        this.repository.addToCart(product).subscribe(
            (data: CartLine) => {
                let line = this.lineCollection.find(line => line.Product.Id == data.Product.Id);
                if (line == null) {
                    this.lineCollection.push(data);
                } else {
                    line.Quantity += 1;
                }
                
            }
        );
    }

    public removeLine(product: Product) {        
        this.repository.deleteFromCart(product.Id).subscribe(
            (data: number) => {
                let index = this.lineCollection.findIndex(i => i.Product.Id == data);
                this.lineCollection.splice(index, 1);
            }
        );        
    }

    public clear() {
        this.lineCollection.length = 0;
    }

    public lines() {
        return this.lineCollection;
    }

    public totalQuan() {
        var quan = 0;        
        this.lineCollection.forEach(l => { quan += l.Quantity;});
        return quan;
    }

    public totalSum() {
        var sum = 0;
        this.lineCollection.forEach(l => { sum += l.Quantity * l.Product.Price });
        return sum;
    }
}

export class CartLine {
    constructor(public Product: Product, public Quantity: number) { }
}
