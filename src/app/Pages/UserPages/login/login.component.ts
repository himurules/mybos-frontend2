import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../../Services/api.service';
import {TokenService} from '../../../Services/token.service';
import {Router} from '@angular/router';
import {AuthService} from '../../../Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  constructor(
    private apiService: ApiService,
    private tokenService: TokenService,
    private router: Router,
    private auth: AuthService
  ) { }

  public form = {
    email: null,
    password: null
  };

  public error = null;

  ngOnInit() {
  }
  onSubmit() {
    this.apiService.login(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleError(error) {
    this.error = error.error.error;
  }

  handleResponse(data) {
    this.tokenService.handle(data);
    this.auth.changeAuthStatus(true);
    this.router.navigate(['/']);
  }
}
