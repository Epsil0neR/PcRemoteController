import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule, ControlsService, ControlRegistration } from 'src/core';
import { KeyComponent } from './key-component/key.component';
import { KeyEditorComponent } from './key-editor-component/key-editor.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    KeyComponent,
    KeyEditorComponent,
  ],
  imports: [
    FontAwesomeModule,
    CommonModule,
    FormsModule,
    CoreModule
  ],
  exports: [
    KeyComponent,
    KeyEditorComponent
  ],
  entryComponents: [
    KeyComponent,
    KeyEditorComponent
  ]
})
export class KeyModule {
  constructor(controls: ControlsService) {
    const reg: ControlRegistration = {
      name: KeyModule.controlKey,
      title: 'Key',
      viewType: KeyComponent,
      editType: KeyEditorComponent
    };

    controls.register(reg);
  }

  static readonly controlKey: string = 'key';

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: KeyModule,
      providers: [
      ]
    };
  }
}
