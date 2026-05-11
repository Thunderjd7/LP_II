import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  email = '';
  password = '';

  constructor(private router: Router) {}

  loginUser() {

    const savedUser = localStorage.getItem('user');

    if (savedUser) {

      const userData = JSON.parse(savedUser);

      if (
        this.email === userData.email &&
        this.password === userData.password
      ) {

        alert('Login Successful');

        this.router.navigate(['/profile']);

      } else {

        alert('Invalid Email or Password');

      }

    } else {

      alert('No User Found');

    }

  }

}