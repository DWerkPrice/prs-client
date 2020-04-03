import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.class';

const url: string = "http://localhost:5000/api/users";
@Injectable({
  providedIn: 'root'
})
export class UserService {

  login(username: string , password: string): Observable<User>{
    return this.http.get(`${url}/login/${username}/${password}`) as Observable<User>;
  } 
  list(): Observable<User[]>{
    return this.http.get(`${url}`) as Observable<User[]>;
  }
  get(id: any): Observable<User>{
    return this.http.get(`${url}/${id}`) as Observable<User>;
  }
  create(user: User): Observable<User>{ 
    return this.http.post(`${url}`, user) as Observable<User>;
  }
  change(user: User): Observable<any>{ // added this function
    return this.http.put(`${url}/${user.id}`, user) as Observable<User>;
  }
  remove(user: User): Observable<any>{ // added this function
    return this.http.delete(`${url}/${user.id}`) as Observable<any>;
  }
  constructor(
    private http: HttpClient
  ) { }
}
