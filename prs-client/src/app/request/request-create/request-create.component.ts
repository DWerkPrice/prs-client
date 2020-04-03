import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user/user.class';
import { RequestService } from '../request.service';
import { UserService } from 'src/app/user/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Request } from '../request.class';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {

  request: Request = new Request();
  users: User[] = [];

  save(): void {
    this.request.userId = Number(this.request.userId);
    this.requestsvc.create(this.request).subscribe(
      res => {
        console.debug("Request create successful!:", res);
        this.router.navigateByUrl("/requests/list");
      },
      err => {
        console.error("Error creating student", err);
      }
    );
  }

  constructor(
    private requestsvc: RequestService,
    private usersvc: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.usersvc.list().subscribe(
      res => {
        this.users = res;
        console.debug("Users:", res);
      },
      err => {
        console.error("Error reading user", err);
      }
    );
  }
}