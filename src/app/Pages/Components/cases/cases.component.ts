import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../../Services/api.service';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.scss']
})
export class CasesComponent implements OnInit {

  slideConfig6 = {
    className: 'center',
    infinite: true,
    slidesToShow: 1,
    speed: 500,
    adaptiveHeight: true,
    dots: true,
  };

  public cases = [];
  public error = null;
  public size = 0;
  public page = 1;
  public pageSize = 10;
  public showSpinner = true;
  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.apiService.casesAll(1, 1).subscribe(
      data => this.handleResponse(data),
    );
  }

  getPageFromService(event){
    this.apiService.casesAll(1, event).subscribe(
      data => this.handleResponse(data),
    );
  }

  handleResponse(data) {
    this.cases = data.data;
    this.page = data.current_page;
    this.size = data.total;
    this.showSpinner = false;
  }

}
