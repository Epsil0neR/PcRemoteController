import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from 'src/environments/environment';
import { WebSocketService } from './services/web-socket.service';
import { makeid } from './utils/makeid';
import { PagesService } from './services/pages.service';
import { InformersStateService } from './services/informers-state.service';
import { ControlsService } from './services/controls.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ControlsService,
    InformersStateService,
    PagesService,
    WebSocketService,
  ],
  exports: [
  ]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        ControlsService,
        InformersStateService,
        PagesService,
        { provide: WebSocketService, useFactory: WebSocketServiceProvider },
      ]
    };
  }
}

function WebSocketServiceProvider() {
  const rv = new WebSocketService(environment.wsHost);
  rv.logRaisingEvent = false;
  rv.open();
  console.log('Created WebSocketService: ', rv);
  return rv;
}
