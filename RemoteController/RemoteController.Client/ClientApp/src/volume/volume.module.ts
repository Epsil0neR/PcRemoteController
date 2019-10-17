import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule, ControlsService } from 'src/core';
import { VolumeComponent } from './volume-component/volume.component';
import { VolumeEditorComponent } from './volume-editor-component/volume-editor.component';

@NgModule({
  declarations: [
    VolumeComponent,
    VolumeEditorComponent
  ],
  imports: [
    CommonModule,
    CoreModule
  ],
  exports: [
    VolumeComponent,
    VolumeEditorComponent
  ],
  entryComponents: [
    VolumeComponent,
    VolumeEditorComponent
  ]
})
export class VolumeModule {
  constructor(controls: ControlsService) {
    controls.register(VolumeModule.controlKey, 'Volume', VolumeComponent, VolumeEditorComponent);
  }

  static readonly controlKey: string = 'vol';

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: VolumeModule,
      providers: [
      ]
    };
  }
}
