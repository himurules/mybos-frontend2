import {Component, OnInit} from '@angular/core';
import {AuthService} from './Services/auth.service';
import {Router} from '@angular/router';
import {TokenService} from './Services/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  public loggedIn: boolean;
  title = 'MYBOS - Angular Frontend Demo';
  constructor(
    private auth: AuthService,
    private router: Router,
    private tokenService: TokenService,
  ) {}

  ngOnInit() {
    this.auth.authStatus.subscribe( value => this.loggedIn = value);
    if (!this.loggedIn) {
      this.router.navigate(['/login']);
    }
  }

  logOut() {
    this.tokenService.remove();
    this.auth.changeAuthStatus(false);
    this.router.navigate(['/login']);
  }
}
