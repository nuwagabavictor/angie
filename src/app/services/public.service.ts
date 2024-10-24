import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PublicService {
  


  api_url = "http://127.0.0.1:8700/accounts/api/auth"
  constructor( private http:HttpClient ) { }

  getMessage(){
    return this.http.get(this.api_url);
  }
}
