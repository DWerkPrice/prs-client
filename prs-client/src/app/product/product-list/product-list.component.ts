import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.class';
import { SystemService } from 'src/app/system.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  sortCol: string = 'lastname'
  sortCode: string = "sortd"
  sortdCode: boolean = false;
  products: Product[] = [];

  searchCriteria: string = '';

  sortByColumn(col: string) {
          this.sortdCode === true ? this.sortdCode = false : this.sortdCode = true;
          console.log("this is column", col, this.sortdCode);
          this.sortCol = col;
          console.log("The service column",this.systemsvc.sortColumn)
      } 

  constructor(
    private systemsvc: SystemService,
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
