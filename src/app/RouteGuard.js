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
var router_1 = require("@angular/router");
var core_2 = require("ng2-adal/core");
var secret_service_1 = require("./secret.service");
var RouteGuard = (function () {
    function RouteGuard(adalService, secretService, router) {
        this.adalService = adalService;
        this.secretService = secretService;
        this.router = router;
    }
    RouteGuard.prototype.canActivate = function () {
        if (this.adalService.userInfo.isAuthenticated) {
            this.adalService.acquireToken(this.secretService.adalConfig.resourceId)
                .subscribe(function (tokenOut) { return localStorage.setItem('id_token', tokenOut); });
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    return RouteGuard;
}());
RouteGuard = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [core_2.AdalService,
        secret_service_1.SecretService,
        router_1.Router])
], RouteGuard);
exports.RouteGuard = RouteGuard;
//# sourceMappingURL=RouteGuard.js.map