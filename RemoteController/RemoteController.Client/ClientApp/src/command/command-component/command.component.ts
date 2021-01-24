import { Component, HostListener, OnDestroy, OnInit } from "@angular/core";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { Subscription } from "rxjs";
import { BaseControlComponent, IControlViewer, InformersStateService, WebSocketService, makeid, WebSocketMessage, WebSocketMessageType, findIcon } from "src/core";
import { ICommandControl } from "../Models/ICommandControl";

@Component({
  selector: 'rc-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.css']
})
export class CommandComponent
  extends BaseControlComponent
  implements IControlViewer, OnInit, OnDestroy {

  public isCommandAvailable: boolean = false;

  private subs: Subscription[] = [];
  private command: string = null;
  public title: string = '';
  public icon: IconDefinition = null;
  public showIconWithTitle: boolean = false;


  constructor(
    private webSocketService: WebSocketService,
    private informers: InformersStateService
  ) {
    super();
  }

  ngOnInit(): void {
    this.subs.push(this.informers.Commands.subscribe(() => {
      this.checkCommandAvailability();
    }));
    this.subs.push(this.webSocketService.isConnected.subscribe(() => {
      this.checkCommandAvailability();
    }));
    this.webSocketService.removeMessageHandler(this.command, this.messageHandler);
    if (!!this.command)
      this.webSocketService.addMessageHandler(this.command, this.messageHandler);
  }

  ngOnDestroy(): void {
    this.subs.forEach(x => x.unsubscribe());
    this.webSocketService.removeMessageHandler(this.command, this.messageHandler);
  }

  load(data: ICommandControl): boolean {
    if (!data) {
      return;
    }


    this.webSocketService.removeMessageHandler(this.command, this.messageHandler);
    this.command = !!data.command ? data.command : null;
    if (!!this.command)
      this.webSocketService.addMessageHandler(this.command, this.messageHandler);

    this.title = !!data.text ? data.text : '';
    this.icon = !!data.icon ? findIcon(data.icon) : null;
    this.showIconWithTitle = data.iconWithText === true;

    this.checkCommandAvailability();

    return true;
  }

  private messageHandler = (msg: WebSocketMessage) => {
    if (msg.ActionName !== this.command)
      return;
    if (msg.Type !== WebSocketMessageType.Response)
      return;

    alert(`Command '${this.command}' executed. Result: \r\n ${msg.Data}`);
  }

  private send() {
    if (!this.isCommandAvailable)
      return;

    const m = new WebSocketMessage({
      a: this.command,
      //d: null,
      t: WebSocketMessageType.Request,
      h: makeid()
    });

    this.webSocketService.send(m);
  }

  private checkCommandAvailability(): void {
    if (!this.command ||
      !this.webSocketService.isConnected.getValue()) {
      this.isCommandAvailable = false;
      return;
    }

    var commands = this.informers.Commands.getValue();

    if (!commands) {
      this.isCommandAvailable = false;
      return;
    }

    this.isCommandAvailable = commands?.Commands.indexOf(this.command) >= 0;
  }

  @HostListener('click')
  onClick() {
    this.send();
  }
}
