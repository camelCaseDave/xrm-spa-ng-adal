import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Account } from '../account';
import { AuthHttp, AuthConfig, AUTH_PROVIDERS, provideAuth } from 'angular2-jwt/angular2-jwt';

@Injectable()
export class XrmService {
    private orgUrl = 'https://ms-dyn365-prev000749.api.crm4.dynamics.com/';

    constructor(private http: AuthHttp) { }

    getAccounts(): Promise<Account[]> {
        return this.http.get(this.orgUrl + 'api/data/v8.2/accounts')
            .toPromise()
            .then(response => this.buildAccounts(response.json().value))
            .catch(this.handleError);
    }
    private buildAccounts(jsonResponse: any): Account[] {
        let res = jsonResponse;
        let accounts: Account[] = [];

        res.forEach((r: any) => {
            let a = new Account(r.name, r.accountid);
            accounts.push(a);
        });

        return accounts;
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
