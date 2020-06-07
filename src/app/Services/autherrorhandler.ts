import {ErrorHandler, Injectable, Injector, NgZone} from '@angular/core';
import { Router } from '@angular/router';
import {TokenService} from './token.service';
import {AuthService} from "./auth.service";

@Injectable()
export class Autherrorhandler implements ErrorHandler {

  constructor(private injector: Injector, private router: Router, private tokenService: TokenService, private auth: AuthService) { }

  handleError(error) {
    const router = this.injector.get(Router);
    if (error.status === 401 || error.status === 403) {
      this.tokenService.remove();
      this.auth.changeAuthStatus(false);
      this.router.navigate(['/login']);
    }else {
      console.log(error.status);
      throw error;
    }
  }
}
