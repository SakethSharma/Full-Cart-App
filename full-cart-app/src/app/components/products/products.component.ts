import { Component, OnInit } from '@angular/core';
import { FullCartMaintComponent } from '../full-cart-maint/full-cart-maint.component';
import { FullCartService } from '../../services/full-cart.service';
import { MyCartService } from '../../services/my-cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit{
  productList: any = []
  searchKey: string = "";
  filterCategory: any = "";

  constructor(private service: FullCartService, private cartService: MyCartService) { }

  ngOnInit(): void {
    this.service.getProducts().pipe().subscribe((val) => {
      this.productList = val;
      this.filterCategory = val;

      this.productList.forEach((item: any) => {
        Object.assign(item, {quantity: 1, total: item.price});
      });
    });

    this.cartService.searchTerm.subscribe((val: any) => {
      this.searchKey = val;
    })
  }

  addToCart(item: any){
    this.cartService.addToCart(item);

  }

  filter(category:string){
    this.filterCategory = this.productList
    .filter((a:any)=>{
      if(a.category == category || category==''){
        return a;
      }
    })
  }

}
