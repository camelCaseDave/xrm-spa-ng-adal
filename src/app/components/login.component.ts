import { Component, OnInit } from '@angular/core';
import { AdalService } from 'ng2-adal/core';

@Component({
    selector: 'welcome',
    templateUrl: './templates/login.component.html'
})
export class LoginComponent {
    isAuthenticated: Boolean = false;

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
