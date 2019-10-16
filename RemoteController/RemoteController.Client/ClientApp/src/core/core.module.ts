import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebSocketService } from 'src/core/services/web-socket.service';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    { provide: WebSocketService, useFactory: WebSocketServiceProvider },
  ]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        WebSocketService
      ]
    }
  }
}

function WebSocketServiceProvider() {
  const rv = new WebSocketService(environment.wsHost);
  rv.logRaisingEvent = false;
  rv.open();
  console.log('Created WebSocketService: ', rv);
  return rv;
}
