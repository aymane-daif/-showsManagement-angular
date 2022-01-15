import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/modules/shared/services/data.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-shows-home',
  templateUrl: './shows-home.component.html',
  styleUrls: ['./shows-home.component.css'],
})
export class ShowsHomeComponent implements OnInit {
  totalTvShows: any;
  username: String = '';
  shows: any;
  constructor(
    private dataService: DataService,
    private sanitizer: DomSanitizer
  ) {}

  showImage(postImage: any) {
    let base64data =
      'data:' + postImage.contentType + ';base64,' + postImage.data;

    return this.sanitizer.bypassSecurityTrustUrl(base64data);
  }

  ngOnInit(): void {
    if (localStorage.getItem('totalTvShows')) {
      this.totalTvShows = localStorage.getItem('totalTvShows');
    }
    if (localStorage.getItem('username')) {
      this.username = localStorage.getItem('username') || '';
    }
    this.dataService.getShows(this.username).subscribe({
      next: (response: any) => {
        this.shows = response;
        console.log(response);
      },
      error: (response: any) => {
        console.log(response + '*******');
      },
    });
  }
}
