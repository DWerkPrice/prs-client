import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product.class';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})

export class ProductDetailComponent implements OnInit {

  product: Product = new Product();
  isHidden: boolean = true;

  VerifyDelete() {
    this.isHidden = false;
  }

  delete(): void {
    this.productsvc.remove(this.product).subscribe(
      res => {
        console.debug("Product delete successful!", res);
        this.router.navigateByUrl("/products/list");
      },
      err => {
        console.error("Error doing product delete", err);
      }
    );
  }


  constructor(
    private route: ActivatedRoute,
    private productsvc: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    this.productsvc.get(id).subscribe(
      res => {
        this.product = res;
        console.debug("product:", res);

      },
      err => {
      console.error("Error debug product get",err);
      }
    );
  }

}
