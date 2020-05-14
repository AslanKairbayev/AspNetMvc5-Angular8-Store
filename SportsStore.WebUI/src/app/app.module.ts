import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeModule } from './store/home.module';
import { HomeComponent } from "./store/home.component";
import { CartComponent } from './store/cart.component';
import { CheckoutComponent } from './store/checkout.component';
import { Routes, RouterModule } from '@angular/router';
import { StoreFirstGuard } from "./storeFirst.guard";
import { AdminComponent } from './admin/admin.component';

const appRoutes: Routes = [
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
        canActivate: [StoreFirstGuard] },
    { path: '**', redirectTo: '/home' }
];

@NgModule({
    imports: [BrowserModule, HomeModule, RouterModule.forRoot(appRoutes)],
    providers: [StoreFirstGuard],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }