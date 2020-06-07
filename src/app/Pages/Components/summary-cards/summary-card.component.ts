import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../../Services/api.service';

@Component({
  selector: 'app-summary-card',
  templateUrl: './summary-card.component.html',
})
export class SummaryCardComponent implements OnInit {
  public summary = null;
  public error = null;
  public showSpinner = true;
  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.summary = this.apiService.buildingSummary(1).subscribe(
      data => this.handleResponse(data),
    );
  }

  handleResponse(data) {
    this.summary = data;
    this.showSpinner = false;
  }

}
