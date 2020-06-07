import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../../Services/api.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
})
export class NotesComponent implements OnInit {
  public notes = [];
  public error = null;
  public size = 0;
  public page = 1;
  public pageSize = 10;
  public showSpinner = true;
  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.apiService.notes(1, 1).subscribe(
      data => this.handleResponse(data),
    );
  }

  getPageFromService(event){
    this.showSpinner = true;
    this.apiService.notes(1, event).subscribe(
      data => this.handleResponse(data),
    );
  }

  handleResponse(data) {
    this.notes = data.data;
    this.page = data.current_page;
    this.size = data.total;
    this.showSpinner = false;
  }

}
