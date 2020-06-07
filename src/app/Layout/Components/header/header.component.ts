import {Component, HostBinding, OnInit, Inject, forwardRef} from '@angular/core';
import {Observable} from 'rxjs';
import { AppComponent } from '../../../app.component';
import { TokenService } from '../../../Services/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  constructor(
    @Inject (forwardRef(() => AppComponent)) private main: AppComponent,
    private tokenService: TokenService
  ) {
  }

  public username = null;
  public myDate = new Date();

  ngOnInit() {
    this.username = this.tokenService.getUser();
  }

  logout(event: MouseEvent) {
    event.preventDefault();
    this.main.logOut();
  }
}
