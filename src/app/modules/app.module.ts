import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AdalService } from 'ng2-adal/core';
import { AuthHttp, AuthConfig, AUTH_PROVIDERS, provideAuth } from 'angular2-jwt/angular2-jwt';

import { AppComponent } from '../components/app.component';
import { AccountComponent } from '../components/account.component';
import { XrmService } from '../services/xrm.service';
import { SecretService } from '../services/secret.service';
import { RouteGuard } from '../RouteGuard';
import { LoginComponent } from '../components/login.component';

const routeConfig = [
  {
    path: 'accounts',
    component: AccountComponent,
    canActivate: [RouteGuard]
  },
  { path: 'logout', component: LoginComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routeConfig), HttpModule],
  declarations: [AppComponent, AccountComponent, LoginComponent],
  providers: [XrmService, SecretService, AdalService, RouteGuard, provideAuth({
    tokenGetter: (() => localStorage.getItem('id_token')),
  })],
  bootstrap: [AppComponent]
})
export class AppModule { }
