import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {LoadingBarRouterModule} from '@ngx-loading-bar/router';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// LAYOUT

import {BaseLayoutComponent} from './Layout/base-layout/base-layout.component';
import {PagesLayoutComponent} from './Layout/pages-layout/pages-layout.component';

// HEADER

import {HeaderComponent} from './Layout/Components/header/header.component';

// SIDEBAR

import {SidebarComponent} from './Layout/Components/sidebar/sidebar.component';

// FOOTER

import {FooterComponent} from './Layout/Components/footer/footer.component';

// Pages

import {ForgotPasswordComponent} from './Pages/UserPages/forgot-password/forgot-password.component';
import {LoginComponent} from './Pages/UserPages/login/login.component';
import {RegisterComponent} from './Pages/UserPages/register/register.component';

// COMPONENTS
import {TokenInterceptor} from './Services/token.interceptor';
import {Autherrorhandler} from './Services/autherrorhandler';
import {DashboardComponent} from './Pages/Dashboards/dashboard.component';
import {CalenderComponent} from './Pages/Components/calender/calender.component';
import {PieChartComponent} from './Pages/Components/pie-chart/pie-chart.component';
import {ActionItemsComponent} from './Pages/Components/action-items/action-items.component';
import {SpinnerComponent} from './Pages/Components/spinner/spinner.component';
import {SummaryCardComponent} from './Pages/Components/summary-cards/summary-card.component';
import {TaskListComponent} from './Pages/Components/task-list/task-list.component';
import {NotesComponent} from './Pages/Components/notes/notes.component';
import {ImportantNumbersComponent} from './Pages/Components/important-numbers/important-numbers.component';
import {ActivityFeedComponent} from './Pages/Components/activity-feed/activity-feed.component';
import {ReportsGeneratedComponent} from './Pages/Components/reports-generated/reports-generated.component';
import {GoogleChartsModule} from 'angular-google-charts';

@NgModule({
  declarations: [
    AppComponent,

    // LAYOUT
    BaseLayoutComponent,
    PagesLayoutComponent,

    // DASHBOARD
    DashboardComponent,
    CalenderComponent,
    PieChartComponent,
    ActionItemsComponent,
    SpinnerComponent,
    ActionItemsComponent,
    SummaryCardComponent,
    TaskListComponent,
    NotesComponent,
    ImportantNumbersComponent,
    ActivityFeedComponent,
    ReportsGeneratedComponent,

    // HEADER
    HeaderComponent,

    // SIDEBAR
    SidebarComponent,

    // FOOTER
    FooterComponent,

    // User Pages

    ForgotPasswordComponent,
    LoginComponent,
    RegisterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    LoadingBarRouterModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,
    GoogleChartsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: ErrorHandler,
      useClass: Autherrorhandler
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
