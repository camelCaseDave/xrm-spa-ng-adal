import { Component, OnInit } from '@angular/core';
import { AdalService } from 'ng2-adal/core';

@Component({
    selector: 'welcome',
    template: `<div *ngIf="!isAuthenticated">You need to login first</div>
    <button *ngIf="!isAuthenticated" (click)="logIn()">Login</button>
    <button *ngIf="isAuthenticated" (click)="logOut()">Logout</button>`
})
export class LoginComponent {
    isAuthenticated : Boolean = false;

    constructor(
        private adalService: AdalService
    ) {
        this.isAuthenticated = this.adalService.userInfo.isAuthenticated;
    }

    public logIn() {
        this.adalService.login();
    }

    public logOut() {
        this.adalService.logOut();
    }
}