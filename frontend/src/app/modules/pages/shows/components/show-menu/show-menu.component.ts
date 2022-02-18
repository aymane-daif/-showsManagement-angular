import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/modules/shared/services/data.service';

@Component({
  selector: 'app-show-menu',
  templateUrl: './show-menu.component.html',
  styleUrls: ['./show-menu.component.css'],
})
export class ShowMenuComponent implements OnInit {
  @Input() showId: Number = -1;
  @Output() deletedShowId = new EventEmitter<Number>();

  isShownMenu: boolean = false;
  currentShowId: Number = -1;
  username: String = '';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {}

  deleteShow(showId: Number) {
    this.isShownMenu = false;
    if (localStorage.getItem('username')) {
      this.username = localStorage.getItem('username') || '';
    }
    this.dataService.deleteShow(this.username, showId).subscribe({
      next: (response: any) => {
        this.deletedShowId.emit(showId);
        console.log(response);
      },
      error: (response: any) => {
        console.log(response);
      },
    });
  }

  showMenu(showId: Number) {
    this.isShownMenu = !this.isShownMenu;
    this.currentShowId = showId;
  }
}
