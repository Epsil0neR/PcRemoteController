import { Component, OnDestroy, OnInit } from "@angular/core";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { Subscription } from "rxjs";
import { findIcon, IControl, IControlEditor, InformersStateService } from "src/core";
import { ICommandControl } from "../Models/ICommandControl";

@Component({
  selector: 'rc-command-editor',
  templateUrl: './command-editor.component.html',
  styleUrls: ['./command-editor.component.css']
})
export class CommandEditorCompoent
  implements IControlEditor, OnInit, OnDestroy {

  private subs: Subscription[] = [];
  public commands: string[] = [];

  public data: ICommandControl = null;
  public command: string = null;
  public icon: IconDefinition = null;
  public showIconPicker: boolean = false;
  public text: string = null;
  public iconWithText: boolean = false;

  constructor(
    private informers: InformersStateService
  ) { }

  ngOnInit(): void {
    this.subs.push(this.informers.Commands.subscribe(value => {
      if (!value) {
        this.commands = [];
        this.command = null;
        return;
      }

      this.commands = value.Commands;
      if (this.command != null && this.commands.indexOf(this.command) < 0)
        this.command = null;
    }));
  }

  ngOnDestroy(): void {
    this.subs.forEach(x => x.unsubscribe());
  }

  load(data: ICommandControl): boolean {
    if (!!data) {
      this.data = data;
      this.command = data.command;
      this.icon = !!data.icon ? findIcon(data.icon) : null;
      this.text = 'text' in data ? data.text : null;
      this.iconWithText = 'iconWithText' in data ? data.iconWithText : false;

    } else {
      this.data = null;
      this.command = null;
      this.icon = null;
      this.text = null;
      this.iconWithText = false;
    }
    this.showIconPicker = false;
    return true;
  }

  save(): IControl {
    if (!!this.command) {
      this.data.command = this.command;
      this.data.icon = !!this.icon ? this.icon.iconName : null;
      this.data.text = this.text;
      this.data.iconWithText = this.iconWithText;
    }
    return this.data;
  }

  onCommandChange(data: string){
    //TODO: Check if data is null or in `commands`.
    this.command = data;
  }

  changeIcon(icon: IconDefinition) {
    this.icon = icon;
    this.showIconPicker = false;
  }
}
