import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserSignUp } from '../interfaces/userSignUp';
import { UserSignIn } from '../interfaces/userSignIn';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl = 'http://localhost:1947/api/v1';
  constructor(private http: HttpClient) {}

  signUp(userData: UserSignUp) {
    return this.http.post(`${this.baseUrl}/register`, userData);
  }

  signIn(userData: UserSignIn) {
    return this.http.post(`${this.baseUrl}/login`, userData);
  }
}
