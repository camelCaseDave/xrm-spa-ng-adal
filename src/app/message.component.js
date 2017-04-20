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
var message_service_1 = require("./message.service");
var MessageComponent = (function () {
    function MessageComponent(messageService) {
        this.messageService = messageService;
        this.messageId = 0;
        this.message = null;
    }
    MessageComponent.prototype.getMessage = function () {
        var _this = this;
        this.messageId = Math.floor((Math.random() * 3) + 1);
        ;
        this.messageService.getMessage(this.messageId).then(function (m) { return _this.message = m; });
    };
    return MessageComponent;
}());
MessageComponent = __decorate([
    core_1.Component({
        selector: 'message',
        template: "<div *ngIf=\"message; else noMessage\">\n        <h2>{{message.Title}}</h2>\n        <div>{{message.Body}}</div>\n        <br />\n        <div><label>Author: </label>{{message.Author}}</div>\n        <div>{{message.PublishedAt | date:'fullDate'}}</div>\n    </div>\n    <button (click)=\"getMessage()\">Get message</button>"
    }),
    __metadata("design:paramtypes", [message_service_1.MessageService])
], MessageComponent);
exports.MessageComponent = MessageComponent;
//# sourceMappingURL=message.component.js.map