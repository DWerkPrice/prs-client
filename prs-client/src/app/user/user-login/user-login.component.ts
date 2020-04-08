import { Component, OnInit } from '@angular/core';
import { User } from '../user.class';
import { SystemService } from 'src/app/system.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  user: User = new User();
  message: string = 'Ready To Login';
  
  login(): void {
    
    this.usersvc.login(this.user.username, this.user.password ).subscribe(
      res => {
         this.systemsvc.loggedInUser = res;
         console.debug("User:", res);
         this.router.navigateByUrl("/requests/list");
      },
      err => {
        this.message = "UserName/PassWord not found";       
        console.error("Invalid", err);
        this.systemsvc.loggedInUser = null;
        this.router.navigateByUrl("/users/login")
        }
  );
  }
  constructor(
    private usersvc: UserService,
    private router: Router,
    private systemsvc: SystemService) {}
  
  ngOnInit(): void {
  }

}
  

  


