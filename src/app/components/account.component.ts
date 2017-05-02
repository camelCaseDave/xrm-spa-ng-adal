import { Component } from '@angular/core';
import { Account } from '../account';
import { XrmService } from '../services/xrm.service';

@Component({
    selector: 'accounts',
    templateUrl: './templates/account.component.html'
})
export class AccountComponent {
    accounts: Account[];
    errorMessage: string;

    constructor(private xrmService: XrmService) { }

    getAccounts() {
        this.xrmService.getAccounts()
            .then(accounts => this.accounts = accounts)
            .catch(error => this.errorMessage = <any>error);
    }
}
