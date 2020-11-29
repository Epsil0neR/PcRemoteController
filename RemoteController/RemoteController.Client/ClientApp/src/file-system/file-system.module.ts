import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule, ControlsService, ControlRegistration } from 'src/core';
import { FileSystemComponent } from './file-system-component/file-system.component';
import { FileSystemEditorComponent } from './file-system-editor-component/file-system-editor.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FileSystemPathsService } from './Services/file-system-paths.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    FontAwesomeModule,
    FormsModule,
    CommonModule,
    CoreModule,
  ],
  providers: [
    FileSystemPathsService
  ],
  declarations: [
    FileSystemComponent,
    FileSystemEditorComponent,
  ],
  exports: [
    FileSystemComponent,
    FileSystemEditorComponent,
  ]
})
export class FileSystemModule {
  constructor(controls: ControlsService) {
    const reg: ControlRegistration = {
      name: FileSystemModule.controlKey,
      title: 'File System',
      viewType: FileSystemComponent,
      editType: FileSystemEditorComponent
    };

    controls.register(reg);
  }

  static readonly controlKey: string = 'fs';

  static forRoot(): ModuleWithProviders<FileSystemModule> {
    return {
      ngModule: FileSystemModule,
      providers: [
        FileSystemPathsService
      ]
    };
  }
}
