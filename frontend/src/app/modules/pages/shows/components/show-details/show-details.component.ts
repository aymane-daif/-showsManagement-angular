import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/modules/shared/services/data.service';
import { ImageService } from 'src/app/modules/shared/services/image.service';
import { IsUserLoggedService } from 'src/app/modules/shared/services/is-user-logged.service';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css'],
})
export class ShowDetailsComponent implements OnInit {
  show: any;
  constructor(
    private dataService: DataService,
    private router: Router,
    private userLogStatus: IsUserLoggedService,
    private activatedRoute: ActivatedRoute,
    private imageService: ImageService
  ) {}

  showImage(postImage: any) {
    return this.imageService.getImage(postImage);
  }

  ngOnInit(): void {
    if (!this.userLogStatus.isLogged()) {
      this.router.navigate(['auth/signin']);
    }
    let showId = this.activatedRoute.snapshot.paramMap.get('showId') || 0;
    let username = localStorage.getItem('username') || '';
    this.dataService.getShow(username, +showId).subscribe({
      next: (response: any) => {
        this.show = response;
        console.log(response);
      },
      error: (response: any) => {
        console.log(response, '*******');
      },
    });
  }
}
