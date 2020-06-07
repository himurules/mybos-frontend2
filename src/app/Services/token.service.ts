import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private iss = {
    login: environment.apiUrl + '/auth/login',
    register: environment.apiUrl + '/auth/register',
    logout: environment.apiUrl + '/auth/logout',
  }
  constructor() { }

  handle(data) {
    this.set(data);
  }

  set(data) {
    localStorage.setItem('user', data.user);
    localStorage.setItem('token', data.access_token);
  }

  get() {
    return localStorage.getItem('token');
  }

  getUser() {
    return localStorage.getItem('user');
  }

  remove() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  isValid() {
    const  token = this.get();
    if (token){
      const payload = this.payload(token);
      if (payload) {
        return Object.values(this.iss).indexOf(payload.iss) > -1;
      }
    }
    return false;
  }

  payload(token) {
    const payload = token.split('.')[1];
    return this.decode(payload);
  }

  decode(payload) {
    return JSON.parse(atob(payload));
  }

  loggedIn() {
    return this.isValid();
  }
}
