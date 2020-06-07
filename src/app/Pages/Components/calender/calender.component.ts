import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../../Services/api.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
})
export class CalenderComponent implements OnInit {
  public error = null;
  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
  }

}
