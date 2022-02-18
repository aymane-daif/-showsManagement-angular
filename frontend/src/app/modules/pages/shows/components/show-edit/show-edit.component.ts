import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  originalImage: Boolean = false;
  imageUrl: any;

  editShowForm: any;

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
  updateImage(postImage: any) {}
  getFile(event: any) {
    if (event.target && event.target.files) {
      const file: File = event.target.files[0];
      this.selectedFile = file;
      this.originalImage = false;
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
        this.originalImage = true;

        this.editShowForm = new FormGroup({
          name: new FormControl(response.name),
          lastSeenEpisode: new FormControl(
            response.lastSeenEpisode.episodeNumber
          ),
          lastSeenSeason: new FormControl(
            response.lastSeenEpisode.seasonNumber
          ),
          upComingEpisode: new FormControl(
            response.upComingEpisode.episode.episodeNumber
          ),
          upComingSeason: new FormControl(
            response.upComingEpisode.episode.seasonNumber
          ),
          showState: new FormControl(response.showState),
          completed: new FormControl(response.completed),
          releaseDate: new FormControl(response.upComingEpisode.releaseDate),
        });
        console.log(response);
      },
      error: (response: any) => {
        console.log(response, '*******');
      },
    });
  }

  editShow(event: any) {
    event.preventDefault();
    console.log(this.editShowForm.value);
    this.dataService.putShow(
      this.show.showId,
      this.editShowForm.value,
      this.selectedFile,
      this.originalImage
    );
  }
}
