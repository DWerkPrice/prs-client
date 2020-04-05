import { Injectable } from '@angular/core';
import { User } from './user/user.class';
//import { Observable } from 'rxjs';
//import { HttpClient, HttpClientXsrfModule } from '@angular/common/http';

//const url: string = "http://localhost:5000/api/users";

@Injectable({
  providedIn: 'root'
})

export class SystemService {
    loggedInUser: User = null;
    reverseSort:  boolean = false;
    sortColumn: string = "";
    sortDirection: string = "";
    requestId: number = 0;
//    login(username: string , password: string): Observable<User>{
//    return this.http.get(`${url}/login/${username}/${password}`) as Observable<User>;
  } 

  

  
 //  private http: HttpClient
