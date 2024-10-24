import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  api_url= "http://127.0.0.1:8700/"

  constructor(private http:HttpClient) { }
  login(username: string, password: string) {
    return this.http.post<any>(this.api_url + `accounts/api/auth`, { username, password }, httpOptions)
      .pipe(
        map(user => {
          // You can store token in local storage or handle it as per requirement
          if (user && user.token) {
            localStorage.setItem('currentUser', JSON.stringify(user));
          }
          return user;
        })
      );
  }

  // Optional: Method to log out the user
  logout(): void {
    localStorage.removeItem('currentUser');  // Remove the stored token
  }

  // Optional: Check if the user is authenticated
  isAuthenticated(): boolean {
    return !!localStorage.getItem('currentUser');
  }
}

