import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule, ControlsService } from 'src/core';
import { KeyComponent } from './key-component/key.component';
import { KeyEditorComponent } from './key-editor-component/key-editor.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    KeyComponent,
    KeyEditorComponent,
  ],
  imports: [
    FontAwesomeModule,
    CommonModule,
    CoreModule
  ],
  exports: [
    KeyComponent,
    KeyEditorComponent
  ]
})
export class KeyModule {
  constructor(controls: ControlsService) {
    controls.register(KeyModule.controlKey, KeyComponent, KeyEditorComponent);
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
