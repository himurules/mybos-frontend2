import {ChangeDetectorRef, Component, HostListener, OnInit} from '@angular/core';
import {ApiService} from '../../../Services/api.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  public workOrders = [];
  public error = null;
  public showSpinner = true;
  public size = 0;
  public page = 1;
  public pageSize = 10;
  constructor(private apiService: ApiService, private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.apiService.workOrders(1, this.page).subscribe(
      data => this.handleResponse(data),
    );
  }

  @HostListener('scroll', ['$event'])

  handleResponse(data) {
    this.workOrders = this.workOrders.concat(data.data);
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
        this.apiService.workOrders(1, this.page).subscribe(
          data => this.handleResponse(data),
        );
      }
    }
  }
}
