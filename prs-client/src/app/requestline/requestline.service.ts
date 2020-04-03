import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Requestline } from './requestline.class';

const url: string = "http://localhost:5000/api/requestlines";

@Injectable({
  providedIn: 'root'
})
export class RequestlineService {

  list(): Observable<Requestline[]>{
    return this.http.get(`${url}`) as Observable<Requestline[]>;
  }
  get(id: any): Observable<Requestline>{
    return this.http.get(`${url}/${id}`) as Observable<Requestline>;
  }
  create(requestline: Requestline): Observable<Requestline>{ // added this function
    return this.http.post(`${url}`, requestline) as Observable<Requestline>;
  }
  change(requestline: Requestline): Observable<any>{ // added this function
    return this.http.put(`${url}/${requestline.id}`, requestline) as Observable<Requestline>;
  }
  remove(requestline: Requestline): Observable<any>{ // added this function
    return this.http.delete(`${url}/${requestline.id}`) as Observable<any>;
  }
  constructor(
    private http: HttpClient)
     { }
}
