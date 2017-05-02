"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
require("rxjs/add/operator/toPromise");
var account_1 = require("../account");
var angular2_jwt_1 = require("angular2-jwt/angular2-jwt");
var XrmService = (function () {
    function XrmService(http) {
        this.http = http;
        this.orgUrl = 'https://ms-dyn365-prev000749.api.crm4.dynamics.com/';
    }
    XrmService.prototype.getAccounts = function () {
        var _this = this;
        return this.http.get(this.orgUrl + 'api/data/v8.2/accounts')
            .toPromise()
            .then(function (response) { return _this.buildAccounts(response.json().value); })
            .catch(this.handleError);
    };
    XrmService.prototype.buildAccounts = function (jsonResponse) {
        var res = jsonResponse;
        var accounts = [];
        res.forEach(function (r) {
            var a = new account_1.Account(r.name, r.accountid);
            accounts.push(a);
        });
        return accounts;
    };
    XrmService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    return XrmService;
}());
XrmService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [angular2_jwt_1.AuthHttp])
], XrmService);
exports.XrmService = XrmService;
//# sourceMappingURL=xrm.service.js.map