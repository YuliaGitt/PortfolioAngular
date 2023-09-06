import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit {
  products: any = [];
  cart: any = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.get_products().subscribe(
      (data) => {
        this.products = data;
      },
      (error) => console.log(error)
    );

    this.apiService.get_cart_items().subscribe(
      (data) => {
        this.cart = data;
      },
      (error) => console.log(error)
    );
  }
}
