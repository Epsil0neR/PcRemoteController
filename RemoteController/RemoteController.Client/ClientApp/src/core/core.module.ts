import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebSocketService } from './services/web-socket.service';
import { PagesService } from './services/pages.service';
import { AuthService } from './services/auth.service';
import { InformersStateService } from './services/informers-state.service';
import { ControlsService } from './services/controls.service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AutoFocusDirective } from './directives/auto-focus.directive';
import { ControlColumnEditorComponent } from './components/control-column-editor/control-column-editor.component';
import { ColumnClassNamePipe } from './pipes/column-class-name.pipe';
import { IconSelectorComponent } from './components/icon-selector/icon-selector.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconsFilterPipe } from './pipes/IconsFilterPipe';
import { FormsModule } from '@angular/forms';
import { EnumToArrayPipe } from './pipes/EnumToArrayPipe';
import { WebSocketMessage } from './models/WebSocketMessage';
import { WebSocketMessageType } from './models/WebSocketMessageType';
import { makeid } from './utils/makeid';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AutoFocusDirective,
    ControlColumnEditorComponent,
    ColumnClassNamePipe,
    EnumToArrayPipe,
    IconsFilterPipe,
    IconSelectorComponent,
  ],
  imports: [
    FontAwesomeModule,
    FormsModule,
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
    IconsFilterPipe,
    EnumToArrayPipe,
  ],
  exports: [
    AutoFocusDirective,
    ControlColumnEditorComponent,
    ColumnClassNamePipe,
    EnumToArrayPipe,
    IconsFilterPipe,
    IconSelectorComponent,
  ]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        ControlsService,
        InformersStateService,
        PagesService,
        AuthService,
        { provide: WebSocketService, useFactory: WebSocketServiceProvider, deps: [AuthService] },
      ]
    };
  }
}

export function WebSocketServiceProvider(authService: AuthService) {
  const l = window.location;
  const protocol = document.location.protocol == 'https:' ? 'wss:' : 'ws:';
  const port = environment.port;
  const url = `${protocol}//${l.hostname}:${port}/Testing`;
  console.log('URL: ', url);
  const rv = new WebSocketService(url);
  rv.logRaisingEvent = false;
  rv.open();
  console.log('Created WebSocketService: ', rv);

  // Link with auth service.
  authService.link(rv);

  return rv;
}
