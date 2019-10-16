import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'src/core';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CoreModule
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
