import { Component, OnInit } from '@angular/core';
import { SecretService } from './secret.service';
import { AdalService } from "ng2-adal/core";

@Component({
  selector: 'my-app',
  template: `<a routerLink="/">HOME</a> <a routerLink="messages">Messages</a> <a routerLink="login">Log in/out</a>
    <h1>Hello {{name}}</h1>
    <router-outlet></router-outlet>`
})
export class AppComponent implements OnInit { 
  name = 'Angular'; 

  constructor(
    private adalService: AdalService,
    private secretService: SecretService) {
    this.adalService.init(this.secretService.adalConfig);
  }

  ngOnInit(): void {
    this.adalService.handleWindowCallback();
    this.adalService.getUser();
  }
}
