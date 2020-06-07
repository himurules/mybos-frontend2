import {Component, HostListener, OnInit} from '@angular/core';
import {ApiService} from '../../../Services/api.service';

@Component({
  selector: 'app-important-numbers',
  templateUrl: './important-numbers.component.html',
})
export class ImportantNumbersComponent implements OnInit {
  public importantNumbers = [];
  public error = null;
  public size = 0;
  public page = 1;
  public pageSize = 10;
  public showSpinner = true;
  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.apiService.importantNumbers(this.page).subscribe(
      data => this.handleResponse(data),
    );
  }

  @HostListener('scroll', ['$event'])

  handleResponse(data) {
    this.importantNumbers = this.importantNumbers.concat(data.data);
    this.page = data.current_page;
    this.size = data.total;
    this.showSpinner = false;
  }



  onScroll(event: any) {
    // visible height + pixel scrolled >= total height
    if (event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight) {
      if((this.page * this.pageSize) < this.size) {
        this.showSpinner = true;
        this.page++;
        this.apiService.importantNumbers(this.page).subscribe(
          data => this.handleResponse(data),
        );
      }
    }
  }
}
