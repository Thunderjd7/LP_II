import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile {

  user: any = {};

  constructor() {

    const savedUser = localStorage.getItem('user');

    if (savedUser) {

      this.user = JSON.parse(savedUser);

    }

  }

}