import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'src/core';
import { FileSystemControlComponent } from './file-system-component/file-system.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
  ],
  declarations: [
    FileSystemControlComponent
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
