import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.class';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  searchCriteria: string = '';

  constructor(
    private product: ProductService,
  ) { }

  ngOnInit(): void {
    this.product.list().subscribe(
      res => {
        this.products  = res;
        console.debug("Product-list: ",res);
      },
      err => {
        console.error("Error reading product", err)
      }
    );
  }
}
