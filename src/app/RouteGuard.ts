import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AdalService } from 'ng2-adal/core';
import { SecretService } from './secret.service';

@Injectable()
export class RouteGuard implements CanActivate {
    constructor(
        private adalService: AdalService,
        private secretService: SecretService,
        private router: Router
    ) { }

    canActivate() {
        if (this.adalService.userInfo.isAuthenticated) {
            this.adalService.acquireToken(this.secretService.adalConfig.resourceId)
                .subscribe(tokenOut => localStorage.setItem('id_token', tokenOut));

            return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }
}