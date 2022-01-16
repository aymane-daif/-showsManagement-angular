import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  baseUrl = 'http://localhost:1947/api/v1/users';
  constructor(private http: HttpClient, private router: Router) {}

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
  postShow = (showData: any, file: File) => {
    let imageId = '';
    const httpHeaders = new HttpHeaders().set(
      'Authorization',
      localStorage.getItem('token') || ''
    );

    var formData = new FormData();
    formData.append('file', file, file.name);

    this.http
      .post(
        `${this.baseUrl}/${localStorage.getItem('username')}/shows/images`,
        formData,
        {
          headers: httpHeaders,
          reportProgress: true,
          observe: 'response',
        }
      )
      .subscribe({
        next: (response: any) => {
          console.log(response);
          imageId = response.body.id;
          showData.posterId = imageId;
          console.log(showData);
          return this.http
            .post(
              `${this.baseUrl}/${localStorage.getItem('username')}/shows`,
              showData,
              {
                headers: httpHeaders,
                reportProgress: true,
                observe: 'response',
              }
            )
            .subscribe({
              next: (response: any) => {
                console.log(response);
                this.router.navigate(['shows']);
              },
              error: (response: any) => {
                console.log(response);
              },
            });
        },
        error: (response: any) => {
          console.log(response);
        },
      });
  };
}
