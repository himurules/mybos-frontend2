import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../../Services/api.service';


@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
})
export class PieChartComponent implements OnInit {

  public error = null;
  public showSpinner = true;
  public title = '';
  public type = 'PieChart';
  public data = [
  ];
  public options = {
    is3D: true
  };
  public width = '350';
  public height = '280';

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.casesSummary(1).subscribe(
      data => this.handleResponse(data),
    );
  }

  handleResponse(data) {
    for (const element of data){
      this.data.push([element.type, element.total]);
    }
    this.showSpinner = false;
  }
}
