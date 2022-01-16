import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shows-header',
  templateUrl: './shows-header.component.html',
  styleUrls: ['./shows-header.component.css']
})
export class ShowsHeaderComponent implements OnInit {
  username : String ='';
  constructor() { }

  ngOnInit(): void {
    if (localStorage.getItem('username')) {
      this.username = localStorage.getItem('username') || '';
    }
  }

}
