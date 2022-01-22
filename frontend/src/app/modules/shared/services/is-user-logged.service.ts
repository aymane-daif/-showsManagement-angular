import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class IsUserLoggedService {
  constructor(private router: Router) {}

  isLogged(): boolean {
    let jwtToken = localStorage.getItem('token');
    return jwtToken ? true : false;
  }

  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('totalTvShows');
    localStorage.removeItem('username');
    localStorage.removeItem('userId');
    this.router.navigate(['auth/signin']);
  }
}
