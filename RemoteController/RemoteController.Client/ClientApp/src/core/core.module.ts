import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from 'src/environments/environment';
import { WebSocketService } from './services/web-socket.service';
import { makeid } from './utils/makeid';
import { PagesService } from './services/pages.service';
import { InformersStateService } from './services/informers-state.service';
import { ControlsService } from './services/controls.service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AutoFocusDirective } from './directives/auto-focus.directive';

@NgModule({
  declarations: [
    AutoFocusDirective
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    CommonModule
  ],
  providers: [
    ControlsService,
    InformersStateService,
    PagesService,
    WebSocketService,
  ],
  exports: [
    AutoFocusDirective
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
