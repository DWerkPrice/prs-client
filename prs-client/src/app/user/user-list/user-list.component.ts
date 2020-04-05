import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.class';
import { SystemService } from 'src/app/system.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  sortCol: string = 'lastname'
  sortCode: string = "sortd"
  sortdCode: boolean = false;
  users: User[] = [];

  searchCriteria: string = '';
  
  sortByColumn(col: string) {
  //  if(this.systemsvc.sortColumn == col) {
        this.sortdCode === true ? this.sortdCode = false : this.sortdCode = true;
        console.log("this is column", col, this.sortdCode);
    //    this.systemsvc.sortColumn = col;
        this.sortCol = col;
   //     this.sortCode = "sortd"
        console.log("The service column",this.systemsvc.sortColumn)
  //  }
   //     this.systemsvc.reverseSort = true;
  //  } else {
  //        globalThis.systemsvc.sortColumn = col;
  //        globalThis.systemsvc.reverseSort = false
  //     }
    } 
  // sortArrow(col: string) : string {
  //    console.log("I hit sortArrow")
  //    if(this.sortColumn == col){
  //      return globalThis.reverseSort ? 'arrow-down': 'arrow-up'
  //    }
  //    return '';
  //}
  constructor(
    private systemsvc: SystemService,
    private user: UserService
  ) { }

  ngOnInit(): void {
    this.user.list().subscribe(
      res => {
        this.users = res;
        console.log(res);
      }, err=> {console.error(err);
    });
  }
}