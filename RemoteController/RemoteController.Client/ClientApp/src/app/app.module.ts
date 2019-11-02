import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { HomeComponent } from './components/home/home.component';
import { CounterComponent } from './components/counter/counter.component';

import { PageComponent } from './components/page/page.component';
import { PageEditorComponent } from './components/page-editor/page-editor.component';
import { PageCreateComponent } from './components/page-create/page-create.component';
import { ControlHostDirective } from './directives/control-host/control-host.directive';
import { EnumToArrayPipe } from './pipes/enum-to-array.pipe';
import { CoreModule } from 'src/core';
import { KeyModule } from 'src/key';
import { VolumeModule } from 'src/volume';
import { FileSystemModule } from 'src/file-system';
import { ControlEditorComponent } from './components/control-editor/control-editor.component';
import { CreateControlComponent } from './components/create-control/create-control.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    PageComponent,
    PageEditorComponent,
    PageCreateComponent,
    ControlHostDirective,
    EnumToArrayPipe,
    ControlEditorComponent,
    CreateControlComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'create', component: PageCreateComponent },
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
})
export class AppModule { }
