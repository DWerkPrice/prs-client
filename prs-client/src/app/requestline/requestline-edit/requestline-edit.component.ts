import { Component, OnInit } from '@angular/core';
import { RequestLine } from '../requestline.class';
import { RequestLineService } from '../requestline.service';
import { ProductService } from 'src/app/product/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/product/product.class';

@Component({
  selector: 'app-requestline-edit',
  templateUrl: './requestline-edit.component.html',
  styleUrls: ['./requestline-edit.component.css']
})
export class RequestlineEditComponent implements OnInit {

  requestline: RequestLine = new RequestLine();
  products: Product[]=[];

  save(): void { 
    this.requestline.productId = Number(this.requestline.productId);
    this.requestlinesvc.change(this.requestline).subscribe(
      res => {
        console.debug("Requestline edit succeeded!: ", res);
        this.router.navigateByUrl("/requests/list");
      },
      err => {
        console.error("Error editing requestLine:", err);
      }
    );
  }
    
  constructor(
    private requestlinesvc: RequestLineService,
    private productsvc: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.productsvc.list().subscribe(
      res=> {
        this.products = res;
        console.debug("Products:", res);
      },
      err => {
        console.error("Error reading Product:", err);
      }
    );
    let id = this.route.snapshot.params.id;
    this.requestlinesvc.get(id).subscribe(
      res  => {
        this.requestline = res;
        console.debug("Requestline:",res);
      },
      err => { 
        console.debug("Error reading requestline",err);
      }
    );
  }
}

