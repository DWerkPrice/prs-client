import { Component, OnInit, ɵɵcontainerRefreshEnd } from '@angular/core';
import { RequestService } from 'src/app//request/request.service';
import { SystemService } from 'src/app/system.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Request } from 'src/app/request/request.class';
import { RequestLine } from '../requestline.class';
import { RequestLineService } from '../requestline.service';


@Component({
  selector: 'app-requestline-list',
  templateUrl: './requestline-list.component.html',
  styleUrls: ['./requestline-list.component.css']
})

export class RequestlineListComponent implements OnInit {

  request: Request;
  requestLine = new RequestLine();
  requestLineId: number = 0

  searchCriteria: string = '';
  

  
    
  
  //this.router.navigateByUrl("/requests/list"); 
    
  delRequestLine(reqline: RequestLine) : void{
    console.log("reqline to be deleted",reqline)
    this.requestlinesvc.remove(reqline).subscribe(
        res => {
          console.debug("Requestline delete successful!",res);
          this.refresh();
        }
    );
  }  

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
//    private route: ActivatedRoute,
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
        console.debug("Request:", res);
      },
      err => {
      console.error("Error debug request get",err);
      }
    );
  }

}
