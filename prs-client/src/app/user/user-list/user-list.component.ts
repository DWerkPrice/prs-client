import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.class';
import { observable } from 'rxjs';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  sortColumn: string = "lastname";
  reverseSort: boolean = false;
  users: User[] = [];
  

  searchCriteria: string = '';

  sortByColumn(col: string) : void {
      console.log("this is column",col);
      this.sortColumn = col;
  }

  sortArrow(col: string) : string {
    console.log("I hit sortArrow")
    if(this.sortColumn == col){
      return this.reverseSort ? 'arrow-down': 'arrow-up'
    }
    return '';
  }

  constructor(
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
