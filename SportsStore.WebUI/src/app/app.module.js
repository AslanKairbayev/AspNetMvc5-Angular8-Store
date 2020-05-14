var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeModule } from './store/home.module';
import { HomeComponent } from "./store/home.component";
import { CartComponent } from './store/cart.component';
import { CheckoutComponent } from './store/checkout.component';
import { RouterModule } from '@angular/router';
import { StoreFirstGuard } from "./storeFirst.guard";
import { AdminComponent } from './admin/admin.component';
var appRoutes = [
    {
        path: 'home', component: HomeComponent,
        canActivate: [StoreFirstGuard]
    },
    {
        path: 'admin', component: AdminComponent,
        canActivate: [StoreFirstGuard]
    },
    {
        path: 'cart', component: CartComponent,
        canActivate: [StoreFirstGuard]
    },
    {
        path: 'checkout', component: CheckoutComponent,
        canActivate: [StoreFirstGuard]
    },
    { path: '**', redirectTo: '/home' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            imports: [BrowserModule, HomeModule, RouterModule.forRoot(appRoutes)],
            providers: [StoreFirstGuard],
            declarations: [AppComponent],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map