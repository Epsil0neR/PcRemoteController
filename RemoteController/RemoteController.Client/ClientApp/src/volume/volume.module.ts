import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class VolumeModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: VolumeModule,
      providers: [
      ]
    };
  }
}
