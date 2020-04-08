import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from '../request.service';
import {Request} from '../request.class';
import { SystemService } from 'src/app/system.service';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {

  request: Request = new Request();
  isHidden: boolean = true;


  review(): void{
    this.request.total > 0 && this.request.total < 50 ? this.request.status = "APPROVED" : this.request.status = "REVIEW"

    this.requestsvc.change(this.request).subscribe(
      res =>{
        console.debug("Review change successful!", res);
 //       console.log("this router:", this.router);
      this.router.navigateByUrl("requests/list");
      },
      err => {
        console.error("Error doing request delete", err);
      }
    );
  }
  edit() {
    this.router.navigateByUrl("/link/this.requestId");
  }
  VerifyDelete() {
    this.isHidden = false;
  }

  delete(): void {
    this.requestsvc.remove(this.request).subscribe(
      res => {
        console.debug("Request delete successful!", res);
        this.router.navigateByUrl("requests/list");
      },
      err => {
        console.error("Error doing request delete", err);
      }
    );
  }


  constructor(
    private route: ActivatedRoute,
    private requestsvc: RequestService,
    private router: Router,
    private systemsvc: SystemService
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    this.systemsvc.requestId = id;
    this.requestsvc.get(id).subscribe(
      res => {
        this.request = res;
        console.debug("Request:", res);

      },
      err => {
      console.error("Error debug request get",err);
      }
    );
  }

}
