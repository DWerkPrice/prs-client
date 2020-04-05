import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app//request/request.service';
import { SystemService } from 'src/app/system.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Request } from 'src/app/request/request.class';
import { RequestLine } from '../requestline.class';


@Component({
  selector: 'app-requestline-list',
  templateUrl: './requestline-list.component.html',
  styleUrls: ['./requestline-list.component.css']
})

export class RequestlineListComponent implements OnInit {

  request: Request;
  requestLine = new RequestLine();
 

  searchCriteria: string = '';
  

  
    
  
  //this.router.navigateByUrl("/requests/list"); 
    


  constructor(
//    private route: ActivatedRoute,
    private systemsvc: SystemService,
    private requestsvc: RequestService,
//    private router: Router
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
