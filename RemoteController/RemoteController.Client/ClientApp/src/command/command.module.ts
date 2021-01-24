import { ModuleWithProviders, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ControlRegistration, ControlsService, CoreModule } from "src/core";
import { CommandComponent } from "./command-component/command.component";
import { CommandEditorCompoent } from "./command-editor-component/command-editor.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    CommandComponent,
    CommandEditorCompoent
  ],
  imports: [
    FontAwesomeModule,
    CommonModule,
    FormsModule,
    CoreModule
  ],
  exports: [
    CommandComponent,
    CommandEditorCompoent
  ]
})
export class CommandModule {
  constructor(controls: ControlsService) {
    const reg: ControlRegistration = {
      name: CommandModule.controlKey,
      title: 'Command',
      viewType: CommandComponent,
      editType: CommandEditorCompoent
    };

    controls.register(reg);
  }

  static readonly controlKey: string = 'cmd';

  static forRoot(): ModuleWithProviders<CommandModule> {
    return {
      ngModule: CommandModule,
      providers: []
    }
  }
}
