import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { HomeComponent } from './components/pages/home/home.component';
import { CounterComponent } from './components/pages/counter/counter.component';
import { FetchDataComponent } from './components/pages/fetch-data/fetch-data.component';

import { PageComponent } from './components/pages/page/page.component';
import { PageEditorComponent } from './components/pages/page-editor/page-editor.component';
import { PageCreateComponent } from './components/pages/page-create/page-create.component';
import { ControlHostDirective } from './directives/control-host/control-host.directive';
import { FileSystemControlComponent } from './components/controls/file-system-control/file-system-control.component';
import { EnumToArrayPipe } from './pipes/enum-to-array.pipe';
import { CoreModule } from 'src/core';
import { KeyModule } from 'src/key';
import { VolumeModule } from 'src/volume';
import { FileSystemModule } from 'src/file-system';

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
        ControlHostDirective,
        FileSystemControlComponent,
        EnumToArrayPipe,
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
            { path: 'edit/:name', component: PageEditorComponent },
            { path: 'p/:name', component: PageComponent }
        ]),
        CoreModule.forRoot(),
        KeyModule.forRoot(),
        VolumeModule.forRoot(),
        FileSystemModule.forRoot()
    ],
    providers: [
        EnumToArrayPipe,
    ],
    bootstrap: [AppComponent],
    entryComponents: [
      FileSystemControlComponent,
    ]
})
export class AppModule { }
