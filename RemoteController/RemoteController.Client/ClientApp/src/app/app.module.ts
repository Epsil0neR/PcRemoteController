import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';

import * as Components from './components/_exports';
import * as Services from './services/_exports';
import { environment } from '../environments/environment';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent,
        CounterComponent,
        FetchDataComponent,
        Components.PageComponent,
        Components.PageEditorComponent,
        Components.PageCreateComponent,
        Components.KeyControlComponent,
        Components.VolumeControlComponent
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
        HttpClientModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', component: HomeComponent, pathMatch: 'full' },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'create', component: Components.PageCreateComponent},
            { path: 'p/:name', component: Components.PageComponent }
        ])
    ],
    providers: [
        Services.PagesService,
        { provide: Services.WebSocketService, useFactory: WebSocketServiceProvider },
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }

export function WebSocketServiceProvider() {
    const rv = new Services.WebSocketService(environment.wsHost);
    rv.open();
    console.log('Created WebSocketService: ', rv);
    return rv;
}
