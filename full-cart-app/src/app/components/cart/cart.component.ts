import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MyCartService } from '../../services/my-cart.service';
import { Subject, takeUntil } from 'rxjs';
import { useAnimation } from '@angular/animations';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
  productsInCart: any = []
  totalPrice: number = 0
  ngUnsubscribe = new Subject<void>;

  constructor(private cartService: MyCartService, private cdRef: ChangeDetectorRef) {}
  
  ngOnInit(): void {
    this.cartService.getProducts().pipe(takeUntil(this.ngUnsubscribe)).subscribe((val: any) => {
      this.productsInCart = val;
      this.totalPrice = this.cartService.getTotalPrice()
      this.totalPrice = Number(this.totalPrice.toFixed(2))
    });
  }

  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }

  emptyCart(){
    this.cartService.emptyTheCart();
  }

  decreaseQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
      const total = item.price * item.quantity;
      item.total = Number(total.toFixed(2));
      this.updateTotalPrice();
      this.cdRef.detectChanges();
    }
  }

  
  
  increaseQuantity(item: any) {
    item.quantity++;
    const total = item.price * item.quantity;
    item.total = Number(total.toFixed(2));
    this.updateTotalPrice();
  }

  private updateTotalPrice() {
    this.totalPrice = this.productsInCart.reduce((total: number, item: any) => {
      return Number((total + item.total).toFixed(2)) ;
    }, 0);
  }
  
}
