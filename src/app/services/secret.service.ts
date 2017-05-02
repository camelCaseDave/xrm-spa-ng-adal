import { Injectable } from '@angular/core';

@Injectable()
export class SecretService {
    public get adalConfig(): any {
        return {
            tenant: /* xxx.onmicrosoft.com */ '',
            clientId: /* application ID: guid from registering application in Azure */ '',
            redirectUri: window.location.origin + '/',
            postLogoutRedirectUri: window.location.origin + '/',
            resourceId: /* CRM API URL in the format: https://xxx.api.crm4.dynamics.com/ */ '',
        };
    }
}
