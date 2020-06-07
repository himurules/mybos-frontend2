import {Component, HostListener, OnInit} from '@angular/core';
import {ApiService} from '../../../Services/api.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-activity-feed',
  templateUrl: './activity-feed.component.html',
  styleUrls: ['./activity-feed.component.scss']
})
export class ActivityFeedComponent implements OnInit {
  public activityFeed = [];
  public error = null;
  public size = 0;
  public page = 1;
  public pageSize = 10;
  public showSpinner = true;
  constructor(private apiService: ApiService) {
  }

  @HostListener('scroll', ['$event'])

  ngOnInit() {
    this.apiService.activityFeed(1, this.page).subscribe(
      data => this.handleResponse(data),
    );
  }

  handleResponse(data) {
    this.activityFeed = this.activityFeed.concat(data.data);
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
        this.apiService.activityFeed(1, this.page).subscribe(
          data => this.handleResponse(data),
        );
      }
    }
  }

}
