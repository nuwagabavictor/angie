import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { first } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  'myform' : FormGroup;

  constructor(private authservice:AuthService) {
    
  }
  ngOnInit(): void{
    this.myform = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });
  }
  onSubmit() {
    if (this.myform.valid) {
      this.authservice.login(this.myform.get('username')?.value, this.myform.get('password')?.value)
        .pipe(first())
        .subscribe({
          next: (data) => {
            console.log(data);  // Handle successful login
          },
          error: (err) => {
            console.error('Login failed', err);  // Handle login error
          },
          complete: () => {
            console.log('Login request completed');  // Optional: Handle when the request is complete
          }
        });
    }
  }
  

}
