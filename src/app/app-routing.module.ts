import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import {BaseLayoutComponent} from './Layout/base-layout/base-layout.component';
import {PagesLayoutComponent} from './Layout/pages-layout/pages-layout.component';


// Dashboards



// Pages
import {ForgotPasswordComponent} from './Pages/UserPages/forgot-password/forgot-password.component';
import {LoginComponent} from './Pages/UserPages/login/login.component';
import {RegisterComponent} from './Pages/UserPages/register/register.component';
import {BeforeLoginService} from './Services/before-login.service';
import {AfterLoginService} from './Services/after-login.service';
import {DashboardComponent} from './Pages/Dashboards/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      {
        path: '', component: DashboardComponent,
        canActivate: [AfterLoginService],
        data: {extraParameter: ''}
      },
      // {path: 'cases', component: CasesComponent, canActivate: [AfterLoginService], data: {extraParameter: 'casesMenu'}},
    ]
  },
  {
    path: '',
    component: PagesLayoutComponent,
    children: [
      // User Pages
      {
        path: 'login',
        component: LoginComponent,
        canActivate: [BeforeLoginService],
        data: {extraParameter: ''}
      },
      {
        path: 'register',
        component: RegisterComponent,
        canActivate: [BeforeLoginService],
        data: {extraParameter: ''}
      },
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent,
        canActivate: [BeforeLoginService],
        data: {extraParameter: ''}
      },
    ]
  },
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
