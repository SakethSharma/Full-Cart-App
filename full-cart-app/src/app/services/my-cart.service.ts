import { Injectable, numberAttribute } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyCartService {

  public cartItemList: any = []
  public productList = new BehaviorSubject<any>([]);
  public searchTerm = new BehaviorSubject<string>("");

  constructor() { }

  getProducts(){
    return this.productList.asObservable();
  }

  // addToCart(product: any) {
  //   this.cartItemList.push(product);
  //   this.productList.next(this.cartItemList);
  //   this.getTotalPrice();
  // }

  addToCart(product: any) {
    let isItemInCart = false;

    this.cartItemList.forEach((item: any) => {
      if (item.id === product.id) {
        item.quantity++;
        isItemInCart = true;
      }
    });
  
    // If the product is not already in the cart, add it with quantity 1
    if (!isItemInCart) {
      product.quantity = 1;
      this.cartItemList.push(product);
    }

    this.getTotalPrice();
  
    this.productList.next(this.cartItemList);
  }
  

  getTotalPrice(): number {
    let grandTotal = 0
    this.cartItemList.map((item: any) => {
      grandTotal += item.total
    })
    return Number(grandTotal.toFixed(2));
  }

  removeCartItem(product: any){
    this.cartItemList.map((item: any, index: any) => {
      if(product.id == item.id){
        this.cartItemList.splice(index, 1);
      }
    })
    this.productList.next(this.cartItemList);
  }

  emptyTheCart(){
    this.cartItemList = [];
    this.productList.next([]);
  }
}
