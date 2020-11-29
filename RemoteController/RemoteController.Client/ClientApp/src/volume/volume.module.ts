import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule, ControlsService, ControlRegistration } from 'src/core';
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
  ]
})
export class VolumeModule {
  constructor(controls: ControlsService) {
    const reg: ControlRegistration = {
      name: VolumeModule.controlKey,
      title: 'Volume',
      viewType: VolumeComponent,
      editType: VolumeEditorComponent
    };

    controls.register(reg);
  }

  static readonly controlKey: string = 'vol';

  static forRoot(): ModuleWithProviders<VolumeModule> {
    return {
      ngModule: VolumeModule,
      providers: [
      ]
    };
  }
}
