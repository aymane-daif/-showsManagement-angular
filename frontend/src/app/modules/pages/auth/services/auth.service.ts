import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { IUserSignUp } from '../interfaces/auth';
import { IUserSignIn } from '../interfaces/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl = 'http://localhost:1947/api/v1';
  constructor(private http: HttpClient) {}

  signUp(userData: IUserSignUp) {
    return this.http.post(`${this.baseUrl}/register`, userData);
  }

  signIn(userData: IUserSignIn) {
    return this.http.post(`${this.baseUrl}/login`, userData, {
      observe: 'response',
    });
  }
}
