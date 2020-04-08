

import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app//request/request.service';
import { SystemService } from 'src/app/system.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Request } from 'src/app/request/request.class';
import { RequestLineService } from 'src/app/requestline/requestline.service';
import { RequestLine } from 'src/app/requestline/requestline.class';


@Component({
  selector: 'app-request-item',
  templateUrl: './request-item.component.html',
  styleUrls: ['./request-item.component.css']
})

export class RequestItemComponent implements OnInit {
  
 
  request: Request = new Request();
 // requestLine = new RequestLine();
  requestLineId: number = 0;
  rejectionReason: string = "";
  ishidden: boolean = true;
  //rejReason: string="just cause";
  
  rejectverify(){
     this.ishidden = false;
  }

  review(){
 //   this.request.total > 0 && this.request.total < 50 ? this.request.status = "APPROVED" : this.request.status = "REVIEW"

    this.requestsvc.change(this.request).subscribe(
      res =>{
      console.debug("Review change successful!", res);
      this.router.navigateByUrl("requests/list");
      },
      err => {
        console.error("Error doing request delete", err);
      }
    );
  }
  approved(): void{
    this.request.status = "Approved" 
    this.request.rejectionReason = this.rejectionReason

    this.requestsvc.change(this.request).subscribe(
      res =>{
        console.debug("Review change successful!", res);
      this.router.navigateByUrl("requests/list");
      },
      err => {
        console.error("Error doing request delete", err);
      }
    );
  }
  

  rejected(): void{

    this.request.status = "REJECTED" 
    //this.request.rejectionReason = this.rejReason

    this.requestsvc.change(this.request).subscribe(
      res =>{
      this.router.navigateByUrl("requests/list");
      },
      err => {
        console.error("Error doing request delete", err);
      }
    );
  }
    
  
  //this.router.navigateByUrl("/requests/list"); 
    
  
  refresh(): void {
      console.log("this systemsvc.requestId",this.systemsvc.requestId)
      this.requestsvc.get(this.systemsvc.requestId).subscribe(
        res => {
            this.request = res;
            console.debug("Request:", res);
      },
      err => {
        console.error("Error debug request get",err);
      }
    );
  }


  constructor(
    private route: ActivatedRoute,
    private systemsvc: SystemService,
    private requestsvc: RequestService,
    private requestlinesvc: RequestLineService,
    private router: Router
  ) { }

  ngOnInit(): void {
    let id = this.systemsvc.requestId;
    this.requestsvc.get(id).subscribe(
      res => {
        this.request = res;
        console.debug("Request item:", res);
      },
      err => {
      console.error("Error debug request get",err);
      }
    );
  }

}
