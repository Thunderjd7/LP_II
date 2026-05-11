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