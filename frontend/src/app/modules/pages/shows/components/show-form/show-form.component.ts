import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataService } from 'src/app/modules/shared/services/data.service';

@Component({
  selector: 'app-show-form',
  templateUrl: './show-form.component.html',
  styleUrls: ['./show-form.component.css'],
})
export class ShowFormComponent implements OnInit {
  emojis = [
    { name: '😍', value: '😍' },
    { name: '👍', value: '👍' },
    { name: '👎', value: '👎' },
    { name: '👌', value: '👌' },
    { name: '💘', value: '💘' },
    { name: '👅', value: '👅' },
    { name: '🤮', value: '🤮' },
  ];

  selectedFile: any;

  addShowForm = new FormGroup({
    name: new FormControl(''),
    lastSeenEpisode: new FormControl(''),
    lastSeenSeason: new FormControl(''),
    upComingEpisode: new FormControl(''),
    upComingSeason: new FormControl(''),
    showEmoji: new FormControl(this.emojis[0].value),
    showState: new FormControl('ONGOING'),
    completed: new FormControl(false),
  });
  constructor(private dataService: DataService) {}

  ngOnInit(): void {}
  addShow(event: any) {
    event.preventDefault();
    console.log(this.addShowForm.value);
    this.dataService.postShow(this.addShowForm.value, this.selectedFile);
  }
  getFile(event: any) {
    if (event.target && event.target.files) {
      const file: File = event.target.files[0];
      this.selectedFile = file;
      console.log(this.selectedFile);
    }
  }
}
