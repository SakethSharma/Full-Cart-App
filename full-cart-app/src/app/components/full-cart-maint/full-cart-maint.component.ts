import { Component, OnInit } from '@angular/core';
import { MyCartService } from '../../services/my-cart.service';

@Component({
  selector: 'app-full-cart-maint',
  templateUrl: './full-cart-maint.component.html',
  styleUrl: './full-cart-maint.component.scss'
})
export class FullCartMaintComponent implements OnInit {
  totalItems = 0;
  public searchTerm !: string;

  constructor(private cartService: MyCartService) {}

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((val) => {
      this.totalItems = val.length;
    })
  }

  search(event: any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    this.cartService.searchTerm.next(this.searchTerm);
  }

  clearSearch(){
    this.searchTerm = "";
    this.cartService.searchTerm.next(this.searchTerm);
  }

}
