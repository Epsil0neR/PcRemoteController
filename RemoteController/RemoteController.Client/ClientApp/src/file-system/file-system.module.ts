import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'src/core';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CoreModule,
  ]
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
