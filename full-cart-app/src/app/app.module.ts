import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FullCartMaintComponent } from './components/full-cart-maint/full-cart-maint.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';
import { SharedModule } from './shared/shared.module';
import { FilterPipe } from './shared/filter';

@NgModule({
  declarations: [
    AppComponent,
    FullCartMaintComponent,
    CartComponent,
    ProductsComponent,
    FilterPipe
  ],
  imports: [
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
