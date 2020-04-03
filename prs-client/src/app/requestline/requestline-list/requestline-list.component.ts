import { Component, OnInit } from '@angular/core';
import { RequestlineService } from '../requestline.service';
import { Requestline } from '../requestline.class';
import { SystemService } from 'src/app/system.service';
import { User } from 'src/app/user/user.class';




@Component({
  selector: 'app-requestline-list',
  templateUrl: './requestline-list.component.html',
  styleUrls: ['./requestline-list.component.css']
})
export class RequestlineListComponent implements OnInit {
  user: User[] = [];
  requestlines: Requestline[] = [];
  logUser = this.systemsvc.loggedInUser.username;
  vldAdmin = this.systemsvc.loggedInUser.isAdmin;
  vldReviewer = this.systemsvc.loggedInUser.isReviewer;
  
  

  constructor(
    private requestline : RequestlineService,
    private systemsvc : SystemService
    ) { }

  ngOnInit(): void {
    this.requestline.list().subscribe(
      res => {
        this.requestlines = res;
        console.debug("Requestline-list:",res);}
      ,err => {console.error(err);}
    );
  }
}