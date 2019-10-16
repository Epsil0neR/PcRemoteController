import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'src/core';
import { KeyComponent } from './key-component/key.component';
import { KeyEditorComponent } from './key-editor-component/key-editor.component';

@NgModule({
  declarations: [
    KeyComponent,
    KeyEditorComponent,
  ],
  imports: [
    CommonModule,
    CoreModule
  ],
  exports: [
    KeyComponent,
    KeyEditorComponent
  ]
})
export class KeyModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: KeyModule,
      providers: [
      ]
    };
  }
}
