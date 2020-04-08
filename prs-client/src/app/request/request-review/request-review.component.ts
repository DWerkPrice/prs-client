import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { Request } from '../request.class';
import { SystemService } from 'src/app/system.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request-review',
  templateUrl: './request-review.component.html',
  styleUrls: ['./request-review.component.css']
})
export class RequestReviewComponent implements OnInit {

  requests: Request[] = []

  searchCriteria: string = '';
  

  displayRequestlines(id: string) {
    this.systemsvc.requestId  = Number(id);
    console.log("Request id",id,this.systemsvc.requestId);
    this.router.navigateByUrl("/requests/item"); 
  }
    


  constructor(
    private request: RequestService,
    private systemsvc: SystemService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.request.returnStatReview().subscribe(
      res => {
        this.requests = res;
        console.debug("Request-Review: ",res);
      },
      err => {
        console.error("Error reading request", err)
      }
    );
  }
}
