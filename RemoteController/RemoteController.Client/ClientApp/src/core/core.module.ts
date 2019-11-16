import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebSocketService } from './services/web-socket.service';
import { PagesService } from './services/pages.service';
import { InformersStateService } from './services/informers-state.service';
import { ControlsService } from './services/controls.service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AutoFocusDirective } from './directives/auto-focus.directive';
import { ControlColumnEditorComponent } from './components/control-column-editor/control-column-editor.component';
import { ColumnClassNamePipe } from './pipes/column-class-name.pipe';
import { IconSelectorComponent } from './components/icon-selector/icon-selector.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AutoFocusDirective,
    ControlColumnEditorComponent,
    ColumnClassNamePipe,
    IconSelectorComponent,
  ],
  imports: [
    FontAwesomeModule,
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    CommonModule
  ],
  providers: [
    ControlsService,
    InformersStateService,
    PagesService,
    WebSocketService,
    ColumnClassNamePipe,
  ],
  exports: [
    AutoFocusDirective,
    ControlColumnEditorComponent,
    ColumnClassNamePipe,
    IconSelectorComponent,
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
  const l = window.location;
  const url = `ws://${l.hostname}:6431/Testing`;
  console.log('URL: ', url);
  const rv = new WebSocketService(url);
  rv.logRaisingEvent = false;
  rv.open();
  console.log('Created WebSocketService: ', rv);
  return rv;
}
