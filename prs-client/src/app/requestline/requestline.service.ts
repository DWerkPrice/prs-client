import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RequestLine } from './requestline.class';

const url: string = "http://localhost:5000/api/requestlines";

@Injectable({
  providedIn: 'root'
})
export class RequestLineService {

  list(): Observable<RequestLine[]>{
    return this.http.get(`${url}`) as Observable<RequestLine[]>;
  }
  get(id: any): Observable<RequestLine>{
    return this.http.get(`${url}/${id}`) as Observable<RequestLine>;
  }
  create(requestLine: RequestLine): Observable<RequestLine>{ // added this function
    return this.http.post(`${url}`, requestLine) as Observable<RequestLine>;
  }
  change(requestLine: RequestLine): Observable<any>{ // added this function
    return this.http.put(`${url}/${requestLine.id}`, requestLine) as Observable<RequestLine>;
  }
  remove(requestLine: RequestLine): Observable<any>{ // added this function
    return this.http.delete(`${url}/${requestLine.id}`) as Observable<any>;
  }
  constructor(
    private http: HttpClient)
     { }
}
