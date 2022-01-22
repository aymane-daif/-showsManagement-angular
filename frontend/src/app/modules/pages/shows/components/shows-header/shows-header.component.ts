import { Component, OnInit } from '@angular/core';
import { IsUserLoggedService } from 'src/app/modules/shared/services/is-user-logged.service';

@Component({
  selector: 'app-shows-header',
  templateUrl: './shows-header.component.html',
  styleUrls: ['./shows-header.component.css'],
})
export class ShowsHeaderComponent implements OnInit {
  username: String = '';
  constructor(private userLogStatus: IsUserLoggedService) {}

  ngOnInit(): void {
    if (localStorage.getItem('username')) {
      this.username = localStorage.getItem('username') || '';
    }
  }
  logOut() {
    this.userLogStatus.logOut();
  }
}
