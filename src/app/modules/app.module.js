"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var core_2 = require("ng2-adal/core");
var angular2_jwt_1 = require("angular2-jwt/angular2-jwt");
var app_component_1 = require("../components/app.component");
var account_component_1 = require("../components/account.component");
var xrm_service_1 = require("../services/xrm.service");
var secret_service_1 = require("../services/secret.service");
var RouteGuard_1 = require("../RouteGuard");
var login_component_1 = require("../components/login.component");
var routeConfig = [
    {
        path: 'accounts',
        component: account_component_1.AccountComponent,
        canActivate: [RouteGuard_1.RouteGuard]
    },
    { path: 'logout', component: login_component_1.LoginComponent },
    { path: 'login', component: login_component_1.LoginComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, router_1.RouterModule.forRoot(routeConfig), http_1.HttpModule],
        declarations: [app_component_1.AppComponent, account_component_1.AccountComponent, login_component_1.LoginComponent],
        providers: [xrm_service_1.XrmService, secret_service_1.SecretService, core_2.AdalService, RouteGuard_1.RouteGuard, angular2_jwt_1.provideAuth({
                tokenGetter: (function () { return localStorage.getItem('id_token'); }),
            })],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map