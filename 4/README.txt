INSTALL ANGULAR 

npm install -g @angular/cli



1.Create Angular Project

ng new user-app

2.

Run Angular Project

ng serve



3.


Create Components

Run these commands one by one:

Register Component:-
ng generate component register


Login Component:-
ng g c login


Profile Component:-
ng g c profile


4.

Open This File
src/app/app.routes.ts

Delete everything inside.

Paste this EXACT code:

import { Routes } from '@angular/router';

import { Register } from './register/register';
import { Login } from './login/login';
import { Profile } from './profile/profile';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'register',
    component: Register
  },

  {
    path: 'login',
    component: Login
  },

  {
    path: 'profile',
    component: Profile
  }
];

Save ✅

5.
Open Main HTML File

Open:

src/app/app.html

Delete everything.

Paste this:

<h1>User Authentication App</h1>

<a routerLink="/register">Register</a> |
<a routerLink="/login">Login</a> |
<a routerLink="/profile">Profile</a>

<hr>

<router-outlet></router-outlet>

Save ✅


6.

Open Register HTML File

Open:

src/app/register/register.html

Delete everything.

Paste this:

<h2>Register User</h2>

<form (ngSubmit)="registerUser()">

  <label>Name:</label>
  <br>
  <input type="text" [(ngModel)]="name" name="name">
  <br><br>

  <label>Email:</label>
  <br>
  <input type="email" [(ngModel)]="email" name="email">
  <br><br>

  <label>Password:</label>
  <br>
  <input type="password" [(ngModel)]="password" name="password">
  <br><br>

  <button type="submit">Register</button>

</form>

Save ✅



Open Register TS File

Open:

src/app/register/register.ts

Delete everything.

Paste this:

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {

  name = '';
  email = '';
  password = '';

  registerUser() {

    const userData = {
      name: this.name,
      email: this.email,
      password: this.password
    };

    localStorage.setItem('user', JSON.stringify(userData));

    alert('Registration Successful');

    console.log(userData);
  }

}

Save ✅

 Run Project

If needed:

ng serve


7.

Open Login HTML File

Open:

src/app/login/login.html

Delete everything.

Paste this:

<h2>Login User</h2>

<form (ngSubmit)="loginUser()">

  <label>Email:</label>
  <br>
  <input type="email" [(ngModel)]="email" name="email">
  <br><br>

  <label>Password:</label>
  <br>
  <input type="password" [(ngModel)]="password" name="password">
  <br><br>

  <button type="submit">Login</button>

</form>

Save ✅


Open Login TS File

Open:

src/app/login/login.ts

Delete everything.

Paste this:

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

Save ✅


8.

Open Profile HTML File

Open:

src/app/profile/profile.html

Delete everything.

Paste this:

<h2>User Profile</h2>

<h3>Name: {{ user.name }}</h3>

<h3>Email: {{ user.email }}</h3>

Save ✅