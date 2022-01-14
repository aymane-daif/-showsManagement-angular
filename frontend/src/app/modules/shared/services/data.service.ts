import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  baseUrl = 'http://localhost:1947/api/v1/users';
  constructor(private http: HttpClient) {}

  getShows(username: String) {
    const httpHeaders = new HttpHeaders().set(
      'Authorization',
      localStorage.getItem('token') || ''
    );
    console.log(httpHeaders);
    return this.http.get(`${this.baseUrl}/${username}/shows`, {
      headers: httpHeaders,
    });
  }
}
