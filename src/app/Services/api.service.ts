import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private baseUrl = environment.apiUrl;

  register(data) {
    return this.http.post(`${this.baseUrl}/auth/register`, data);
  }

  login(data) {
    return this.http.post(`${this.baseUrl}/auth/login`, data);
  }

  logout() {
    return this.http.post(`${this.baseUrl}/auth/logout`, null);
  }

  buildingSummary(buildingId) {
    return this.http.get(`${this.baseUrl}/buildings/${buildingId}/summary`);
  }

  casesSummary(buildingId) {
    return this.http.get(`${this.baseUrl}/buildings/${buildingId}/cases-summary`);
  }

  casesAll(buildingId, page) {
    console.log(page);
    return this.http.get(`${this.baseUrl}/buildings/${buildingId}/cases?page=${page}`);
  }

  workOrders(buildingId, page) {
    return this.http.get(`${this.baseUrl}/buildings/${buildingId}/work-orders?page=${page}`);
  }

  actionItems(buildingId) {
    return this.http.get(`${this.baseUrl}/buildings/${buildingId}/action-items`);
  }

  notes(buildingId, page) {
    return this.http.get(`${this.baseUrl}/buildings/${buildingId}/notes?page=${page}`);
  }

  importantNumbers(page) {
    return this.http.get(`${this.baseUrl}/important-numbers?page=${page}`);
  }

  activityFeed(buildingId, page) {
    return this.http.get(`${this.baseUrl}/buildings/${buildingId}/activity-feed?page=${page}`);
  }
}
