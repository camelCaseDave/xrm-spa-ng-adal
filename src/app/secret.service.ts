// fill in [your tenant] and [the application ID] below
// and rename this file to secret.service.ts

import { Injectable } from '@angular/core';
@Injectable()
export class SecretService {
    public get adalConfig(): any {
        return {
            tenant: 'xxxxx.onmicrosoft.com',
            clientId: '74e56cd8-6c87-4760-8fb5-1cb6378808c9',
            redirectUri: window.location.origin + '/',
            postLogoutRedirectUri: window.location.origin + '/',
            resourceId:"https://xxxx.crm.dynamics.com/"
        };
    }
}