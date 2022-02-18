import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/modules/shared/services/data.service';
import { ImageService } from 'src/app/modules/shared/services/image.service';
import { IsUserLoggedService } from 'src/app/modules/shared/services/is-user-logged.service';

@Component({
  selector: 'app-show-edit',
  templateUrl: './show-edit.component.html',
  styleUrls: ['./show-edit.component.css'],
})
export class ShowEditComponent implements OnInit {
  show: any;
  selectedFile: any;
  imageUrl: any;
  constructor(
    private dataService: DataService,
    private router: Router,
    private userLogStatus: IsUserLoggedService,
    private activatedRoute: ActivatedRoute,
    private imageService: ImageService
  ) {}

  showImage(postImage: any) {
    console.log(postImage, 'here');
    return this.imageService.getImage(postImage);
  }
  updateImage(postImage: any) {}
  getFile(event: any) {
    if (event.target && event.target.files) {
      const file: File = event.target.files[0];
      this.selectedFile = file;
      console.log(this.selectedFile);
      const reader = new FileReader();
      reader.onload = (e) => (this.imageUrl = reader.result);
      reader.readAsDataURL(file);
    }
  }

  ngOnInit(): void {
    if (!this.userLogStatus.isLogged()) {
      this.router.navigate(['auth/signin']);
    }
    let showId = this.activatedRoute.snapshot.paramMap.get('showId') || -1;
    let username = localStorage.getItem('username') || '';
    this.dataService.getShow(username, +showId).subscribe({
      next: (response: any) => {
        this.show = response;
        this.selectedFile = response.postImage;
        console.log(response);
      },
      error: (response: any) => {
        console.log(response, '*******');
      },
    });
  }
}
