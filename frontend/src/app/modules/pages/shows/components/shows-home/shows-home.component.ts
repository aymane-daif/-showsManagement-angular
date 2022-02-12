import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/modules/shared/services/data.service';
import { Router } from '@angular/router';
import { IsUserLoggedService } from 'src/app/modules/shared/services/is-user-logged.service';
import { ImageService } from 'src/app/modules/shared/services/image.service';

@Component({
  selector: 'app-shows-home',
  templateUrl: './shows-home.component.html',
  styleUrls: ['./shows-home.component.css'],
})
export class ShowsHomeComponent implements OnInit {
  isShownMenu: boolean = false;
  totalTvShows: any;
  username: String = '';
  shows: any = [];
  placeHolderNumbers: any = [];
  isLoading = true;

  constructor(
    private dataService: DataService,
    private userLogStatus: IsUserLoggedService,
    private imageService: ImageService,
    private router: Router
  ) {}

  setNumberPlaceHolders() {
    for (let i = 0; i < 7; i++) {
      this.placeHolderNumbers.push(i);
    }
  }
  showDetails(showId: Number) {
    this.router.navigate(['shows', showId]);
  }

  showImage(postImage: any) {
    return this.imageService.getImage(postImage);
  }

  addShow() {
    this.router.navigate(['shows/add']);
  }

  deleteShow(showId: Number) {
    this.isShownMenu = false;
    if (localStorage.getItem('username')) {
      this.username = localStorage.getItem('username') || '';
    }
    this.dataService.deleteShow(this.username, showId).subscribe({
      next: (response: any) => {
        this.shows = response;
        this.totalTvShows = this.shows.length;
        localStorage.setItem('totalTvShows', this.totalTvShows);
        setTimeout(() => {
          this.isLoading = false;
        }, 3000);
        console.log(response);
      },
      error: (response: any) => {
        console.log(response);
        setTimeout(() => {
          this.isLoading = false;
        }, 3000);
      },
    });
  }

  showMenu() {
    this.isShownMenu = !this.isShownMenu;
  }

  ngOnInit(): void {
    if (!this.userLogStatus.isLogged()) {
      this.router.navigate(['auth/signin']);
    }
    this.setNumberPlaceHolders();
    this.isLoading = true;

    if (localStorage.getItem('totalTvShows')) {
      this.totalTvShows = localStorage.getItem('totalTvShows');
    }
    if (localStorage.getItem('username')) {
      this.username = localStorage.getItem('username') || '';
    }
    this.dataService.getShows(this.username).subscribe({
      next: (response: any) => {
        this.shows = response;
        this.totalTvShows = this.shows.length;
        localStorage.setItem('totalTvShows', this.totalTvShows);
        setTimeout(() => {
          this.isLoading = false;
        }, 3000);
        console.log(response);
      },
      error: (response: any) => {
        console.log(response + '*******');
        setTimeout(() => {
          this.isLoading = false;
        }, 3000);
      },
    });
  }
}
