import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/modules/shared/services/data.service';

@Component({
  selector: 'app-shows-home',
  templateUrl: './shows-home.component.html',
  styleUrls: ['./shows-home.component.css'],
})
export class ShowsHomeComponent implements OnInit {
  totalTvShows: any;
  username: String = '';
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    if (localStorage.getItem('totalTvShows')) {
      this.totalTvShows = localStorage.getItem('totalTvShows');
    }
    if (localStorage.getItem('username')) {
      this.username = localStorage.getItem('username') || '';
    }
    this.dataService.getShows(this.username).subscribe({
      next: (response: any) => {
        console.log(response);
      },
      error: (response: any) => {
        console.log(response + '*******');
      },
    });
  }
}
