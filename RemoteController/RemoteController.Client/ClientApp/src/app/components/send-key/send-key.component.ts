import { Component, OnInit, HostListener } from '@angular/core';
import { WebSocketService } from "../../services/_exports";
import * as Models from "../../models/_exports";
import * as Utils from "../../utils/_exports";

@Component({
    selector: 'send-key',
    templateUrl: './send-key.component.html',
    styleUrls: ['./send-key.component.css']
})
export class SendKeyComponent implements OnInit {

    public width: number = 2;
    public height: number = 2;
    public action: string = 'key';
    public data: string = 'f';

    constructor(public WebSocketService: WebSocketService) {

    }

    ngOnInit() {
    }

    @HostListener("click")
    onClick() {
        let m = new Models.WebSocketMessage();
        m.ActionName = this.action;
        m.Data = this.data;
        m.Type = Models.WebSocketMessageType.Request;
        m.Hash = Utils.makeid();

        if (this.WebSocketService.state !== WebSocket.OPEN)
            return;

        this.WebSocketService.send(m);
    }
}
