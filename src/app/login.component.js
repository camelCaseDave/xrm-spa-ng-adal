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
var core_2 = require("ng2-adal/core");
var LoginComponent = (function () {
    function LoginComponent(adalService) {
        this.adalService = adalService;
        this.isAuthenticated = false;
        this.isAuthenticated = this.adalService.userInfo.isAuthenticated;
    }
    LoginComponent.prototype.logIn = function () {
        this.adalService.login();
    };
    LoginComponent.prototype.logOut = function () {
        this.adalService.logOut();
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'welcome',
        template: "<div *ngIf=\"!isAuthenticated\">You need to login first</div>\n    <button *ngIf=\"!isAuthenticated\" (click)=\"logIn()\">Login</button>\n    <button *ngIf=\"isAuthenticated\" (click)=\"logOut()\">Logout</button>"
    }),
    __metadata("design:paramtypes", [core_2.AdalService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map