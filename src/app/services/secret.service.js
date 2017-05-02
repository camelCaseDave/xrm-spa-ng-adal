"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SecretService = (function () {
    function SecretService() {
    }
    Object.defineProperty(SecretService.prototype, "adalConfig", {
        get: function () {
            return {
                tenant: 'chorusco.onmicrosoft.com',
                clientId: 'b78b00a8-ebd3-429c-9a95-bac717bc1b9f',
                redirectUri: window.location.origin + '/',
                postLogoutRedirectUri: window.location.origin + '/',
                resourceId: 'https://ms-dyn365-prev000749.api.crm4.dynamics.com/'
            };
        },
        enumerable: true,
        configurable: true
    });
    return SecretService;
}());
SecretService = __decorate([
    core_1.Injectable()
], SecretService);
exports.SecretService = SecretService;
//# sourceMappingURL=secret.service.js.map