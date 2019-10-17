import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule, ControlsService } from 'src/core';
import { FileSystemControlComponent } from './file-system-component/file-system.component';
import { FileSystemEditorComponent } from './file-system-editor-component/file-system-editor.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    FontAwesomeModule,
    CommonModule,
    CoreModule,
  ],
  declarations: [
    FileSystemControlComponent,
    FileSystemEditorComponent,
  ],
  exports: [
    FileSystemControlComponent,
    FileSystemEditorComponent,
  ],
  entryComponents: [
    FileSystemControlComponent,
    FileSystemEditorComponent,
  ],
})
export class FileSystemModule {
  constructor(controls: ControlsService) {
    controls.register(FileSystemModule.controlKey, 'File System', FileSystemControlComponent, FileSystemEditorComponent);
  }

  static readonly controlKey: string = 'fs';

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FileSystemModule,
      providers: [
      ]
    };
  }
}
