import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';

import { environment } from '../environments/environment';
import { PageComponent } from './components/page/page.component';
import { PageEditorComponent } from './components/page-editor/page-editor.component';
import { PageCreateComponent } from './components/page-create/page-create.component';
import { KeyControlComponent } from './components/key-control/key-control.component';
import { VolumeControlComponent } from './components/volume-control/volume-control.component';
import { ControlHostDirective } from './directives/control-host/control-host.directive';
import { WebSocketService } from './services/web-socket.service';
import { PagesService } from './services/pages.service';
import { OutputControlComponent } from './components/output-control/output-control.component';
import { CommandControlComponent } from './components/command-control/command-control.component';
import { FileSystemControlComponent } from './components/file-system-control/file-system-control.component';
import { InformersStateService } from './services/informers-state.service';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent,
        CounterComponent,
        FetchDataComponent,
        PageComponent,
        PageEditorComponent,
        PageCreateComponent,
        KeyControlComponent,
        VolumeControlComponent,
        ControlHostDirective,
        OutputControlComponent,
        CommandControlComponent,
        FileSystemControlComponent,
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
        FontAwesomeModule,
        HttpClientModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', component: HomeComponent, pathMatch: 'full' },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'create', component: PageCreateComponent},
            { path: 'p/:name', component: PageComponent }
        ])
    ],
    providers: [
        PagesService,
        { provide: WebSocketService, useFactory: WebSocketServiceProvider },
        InformersStateService,
    ],
    bootstrap: [AppComponent],
    entryComponents: [
      KeyControlComponent,
      VolumeControlComponent,
      OutputControlComponent,
      CommandControlComponent,
      FileSystemControlComponent,
    ]
})
export class AppModule { }

export function WebSocketServiceProvider() {
    const rv = new WebSocketService(environment.wsHost);
    rv.logRaisingEvent = false;
    rv.open();
    console.log('Created WebSocketService: ', rv);
    return rv;
}
