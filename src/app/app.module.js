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
var app_component_1 = require("./app.component");
var message_component_1 = require("./message.component");
var message_service_1 = require("./message.service");
var secret_service_1 = require("./secret.service");
var RouteGuard_1 = require("./RouteGuard");
var login_component_1 = require("./login.component");
var core_2 = require("ng2-adal/core");
var angular2_jwt_1 = require("angular2-jwt/angular2-jwt");
var routeConfig = [
    {
        path: 'messages',
        component: message_component_1.MessageComponent,
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
        declarations: [app_component_1.AppComponent, message_component_1.MessageComponent, login_component_1.LoginComponent],
        providers: [message_service_1.MessageService, secret_service_1.SecretService, core_2.AdalService, RouteGuard_1.RouteGuard, angular2_jwt_1.provideAuth({
                //headerName: 'Authorization',
                //headerPrefix: 'Bearer',
                tokenGetter: (function () { return localStorage.getItem('id_token'); }),
            })],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map