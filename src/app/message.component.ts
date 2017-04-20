import { Component } from '@angular/core';
import { Message } from './message'
import { MessageService } from './message.service';

@Component({
    selector: 'message',
    template: `<div *ngIf="message; else noMessage">
        <h2>{{message.Title}}</h2>
        <div>{{message.Body}}</div>
        <br />
        <div><label>Author: </label>{{message.Author}}</div>
        <div>{{message.PublishedAt | date:'fullDate'}}</div>
    </div>
    <button (click)="getMessage()">Get message</button>`
})
export class MessageComponent {
    messageId: number;
    message: Message;

    constructor(private messageService: MessageService) {
        this.messageId = 0;
        this.message = null;
    }

    getMessage() {
        this.messageId = Math.floor((Math.random() * 3) + 1);;
        this.messageService.getMessage(this.messageId).then(m => this.message = m);
    }
}