import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss'],
  animations: [
  ]
})

export class BaseLayoutComponent implements OnInit {

  public loggedIn: boolean;
  constructor(
  ) {}

  ngOnInit() {
  }
}



