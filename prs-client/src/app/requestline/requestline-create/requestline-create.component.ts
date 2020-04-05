import { Component, OnInit } from '@angular/core';
import { RequestLine } from '../requestline.class';
import { SystemService } from 'src/app/system.service';
import { Router } from '@angular/router';
import { RequestLineService } from '../requestline.service';
import { Product } from 'src/app/product/product.class';

@Component({
  selector: 'app-requestline-create',
  templateUrl: './requestline-create.component.html',
  styleUrls: ['./requestline-create.component.css']
})
export class RequestlineCreateComponent implements OnInit {

  requestLine: RequestLine = new RequestLine();
  product: Product = new Product();
  save(): void{
    this.requestLine.productId = this.product.id;
    this.requestlinesvc.create(this.requestLine).subscribe(
      res=>{
        console.debug("Requestline created:",res);
        this.router.navigateByUrl("/requestlines/list");
      },
      err=> {
        console.error("ERROR creating requestline:",err);
      }
    )
  }

  constructor(
    private systemsvc: SystemService,
    private requestlinesvc: RequestLineService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.requestLine.requestId = this.systemsvc.requestId;
  }

}


