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
var xrm_service_1 = require("../services/xrm.service");
var AccountComponent = (function () {
    function AccountComponent(xrmService) {
        this.xrmService = xrmService;
    }
    AccountComponent.prototype.getAccounts = function () {
        var _this = this;
        this.xrmService.getAccounts()
            .then(function (accounts) { return _this.accounts = accounts; })
            .catch(function (error) { return _this.errorMessage = error; });
    };
    return AccountComponent;
}());
AccountComponent = __decorate([
    core_1.Component({
        selector: 'accounts',
        templateUrl: './templates/account.component.html'
    }),
    __metadata("design:paramtypes", [xrm_service_1.XrmService])
], AccountComponent);
exports.AccountComponent = AccountComponent;
//# sourceMappingURL=account.component.js.map