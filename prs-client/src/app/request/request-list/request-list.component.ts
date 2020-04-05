import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { Request } from '../request.class';
import { SystemService } from 'src/app/system.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {

  requests: Request[] = []

  searchCriteria: string = '';
  

  displayRequestlines(id: string) {
    this.systemsvc.requestId  = Number(id);
    console.log("Request id",id,this.systemsvc.requestId);
    this.router.navigateByUrl("/requestlines/list"); 
  }
    


  constructor(
    private request: RequestService,
    private systemsvc: SystemService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.request.list().subscribe(
      res => {
        this.requests = res;
        console.debug("Request-list: ",res);
      },
      err => {
        console.error("Error reading request", err)
      }
    );
  }
}
