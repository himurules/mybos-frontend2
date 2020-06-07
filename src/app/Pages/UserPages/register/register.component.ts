import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../../Services/api.service';
import {TokenService} from '../../../Services/token.service';
import {Router} from '@angular/router';
import {AuthService} from '../../../Services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private apiService: ApiService,
    private tokenService: TokenService,
    private router: Router
  ) { }

  public form = {
    email: null,
    name: null,
    password: null,
    password_confirmation: null
  };

  public error = {
    email: null,
    name: null,
    password: null
  };

  ngOnInit() {
  }
  onSubmit() {
    this.apiService.register(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleError(error) {
    this.error = error.error.errors;
  }

  handleResponse(data) {
    this.tokenService.handle(data);
    this.auth.changeAuthStatus(true);
    this.router.navigate(['/']);
  }

}
