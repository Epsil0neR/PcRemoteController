import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'src/core';
import { FileSystemControlComponent } from './file-system-component/file-system.component';
import { FileSystemEditorComponent } from './file-system-editor/file-system-editor.component';

@NgModule({
  imports: [
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
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FileSystemModule,
      providers: [
      ]
    };
  }
}
