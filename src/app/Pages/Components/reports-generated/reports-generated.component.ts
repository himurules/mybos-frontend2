import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../../Services/api.service';

@Component({
  selector: 'app-reports-generated',
  templateUrl: './reports-generated.component.html',
})
export class ReportsGeneratedComponent implements OnInit {
  public reportsGenerated = [];
  public error = null;
  public showSpinner = true;
  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.reportsGenerated = [
      { "id":29899,
      "building":9,
      "from":"2020-06-01",
      "to":"2020-06-30",
      "type":"doc","created":"2020-06-07T11:49:19+10:00"},
      {"id":29898,"building":9,"from":"2020-06-01","to":"2020-06-30","type":"pdf","created":"2020-06-06T21:49:43+10:00"},{"id":29867,"building":9,"from":"2020-06-01","to":"2020-06-30","type":"pdf","created":"2020-06-05T11:25:10+10:00"},{"id":29866,"building":9,"from":"2020-06-01","to":"2020-06-30","type":"xls","created":"2020-06-05T11:24:36+10:00"},{"id":29851,"building":9,"from":"2020-06-01","to":"2020-06-30","type":"doc","created":"2020-06-04T17:06:45+10:00"},{"id":29845,"building":9,"from":"2020-06-01","to":"2020-06-30","type":"pdf","created":"2020-06-04T13:25:54+10:00"},{"id":29785,"building":9,"from":"2020-06-01","to":"2020-06-30","type":"pdf","created":"2020-06-02T13:52:50+10:00"},{"id":29784,"building":9,"from":"2020-06-01","to":"2020-06-30","type":"xls","created":"2020-06-02T13:52:10+10:00"},{"id":29772,"building":9,"from":"2020-06-01","to":"2020-06-30","type":"pdf","created":"2020-06-02T11:02:38+10:00"},{"id":29644,"building":9,"from":"2020-05-01","to":"2020-05-31","type":"pdf","created":"2020-05-30T22:49:56+10:00"}];
    this.showSpinner = false;
  }
}
