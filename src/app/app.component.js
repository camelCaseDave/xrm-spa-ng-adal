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
var secret_service_1 = require("./secret.service");
var core_2 = require("ng2-adal/core");
var AppComponent = (function () {
    function AppComponent(adalService, secretService) {
        this.adalService = adalService;
        this.secretService = secretService;
        this.name = 'Angular';
        this.adalService.init(this.secretService.adalConfig);
    }
    AppComponent.prototype.ngOnInit = function () {
        this.adalService.handleWindowCallback();
        this.adalService.getUser();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<a routerLink=\"/\">HOME</a> <a routerLink=\"messages\">Messages</a> <a routerLink=\"login\">Log in/out</a>\n    <h1>Hello {{name}}</h1>\n    <router-outlet></router-outlet>"
    }),
    __metadata("design:paramtypes", [core_2.AdalService,
        secret_service_1.SecretService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map