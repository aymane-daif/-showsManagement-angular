import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IsUserLoggedService } from 'src/app/modules/shared/services/is-user-logged.service';

@Component({
  selector: 'app-add-show',
  templateUrl: './add-show.component.html',
  styleUrls: ['./add-show.component.css'],
})
export class AddShowComponent implements OnInit {
  constructor(
    private userLogStatus: IsUserLoggedService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.userLogStatus.isLogged()) {
      this.router.navigate(['auth/signin']);
    }
  }
}
