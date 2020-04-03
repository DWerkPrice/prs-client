import { Component, OnInit } from '@angular/core';
import { Menu } from './menu.class';
import { SystemService } from '../system.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {
 
  
  menu: Menu[] = [
    new Menu("Users","/users/list","User list page"),
    new Menu("Vendors","/vendors/list","Vendor list page"),
    new Menu("Products","/products/list","Product list page"),
    new Menu("Requests","/requests/list","Request list page"),
    new Menu("Requestlines","/requestlines/list","Requestline list page"),
    new Menu("Login","/users/login/''/''","Users login page")
  ]
  loguser = this.systemsvc.loggedInUser.username
  constructor(
    private systemsvc: SystemService
  ) {}

  ngOnInit(): void {}

}
