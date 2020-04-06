import { Component, OnInit } from '@angular/core';
import { RequestLine } from '../requestline.class';
import { SystemService } from 'src/app/system.service';
import { Router } from '@angular/router';
import { RequestLineService } from '../requestline.service';
import { Product } from 'src/app/product/product.class';
import { ProductService } from 'src/app/product/product.service';

@Component({
  selector: 'app-requestline-create',
  templateUrl: './requestline-create.component.html',
  styleUrls: ['./requestline-create.component.css']
})
export class RequestlineCreateComponent implements OnInit {

  requestLine: RequestLine = new RequestLine();
  products: Product[]
  save(): void{
    this.requestLine.requestId = this.systemsvc.requestId
    this.requestLine.productId = Number(this.requestLine.productId);
    this.requestlinesvc.create(this.requestLine).subscribe(
      res=>{
        console.debug("Requestline created:",res);
        this.router.navigateByUrl("/requestlines/list");
      },
      err=> {
        console.error("ERROR creating requestline:",err);
      }
    );
  }

  constructor(
    private systemsvc: SystemService,
    private requestlinesvc: RequestLineService,
    private productsvc: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.requestLine.requestId = this.systemsvc.requestId;
    console.log("systemsvc.requestId:",this.systemsvc.requestId,this.requestLine.requestId);
    this.productsvc.list().subscribe(
      res => {
        this.products = res;
        console.log("Products:", res);
      },
      err => {
        console.error("Error reading product", err);
      }
    );
  }
}


