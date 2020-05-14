import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from "./home.component";
import { CartComponent } from './cart.component';
import { CheckoutComponent } from './checkout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from "@angular/router";
import { AdminComponent } from "../admin/admin.component";

@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule, HttpClientModule, ReactiveFormsModule, NgbModule, RouterModule],
    declarations: [HomeComponent, CartComponent, CheckoutComponent, AdminComponent],
    exports: [HomeComponent]
})
export class HomeModule { }