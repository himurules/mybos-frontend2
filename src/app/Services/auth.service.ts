import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {TokenService} from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = new BehaviorSubject(this.tokenService.loggedIn());
  authStatus = this.loggedIn.asObservable();

  constructor( private tokenService: TokenService ) { }

  changeAuthStatus(value: boolean) {
    this.loggedIn.next(value);
  }
}
