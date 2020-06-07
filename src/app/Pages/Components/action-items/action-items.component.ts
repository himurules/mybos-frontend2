import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../../Services/api.service';

@Component({
  selector: 'app-action-items',
  templateUrl: './action-items.component.html',
  styleUrls: ['./action-items.component.scss']
})
export class ActionItemsComponent implements OnInit {
  public actionItems = null;
  public error = null;
  public showSpinner = true;
  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.apiService.actionItems(1).subscribe(
      data => this.handleResponse(data),
    );
  }

  handleResponse(data) {
    this.actionItems = data;
    this.showSpinner = false;
  }

}
