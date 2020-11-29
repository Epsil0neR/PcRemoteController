import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SortablejsModule } from 'ngx-sortablejs';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';

import { PageComponent } from './components/page/page.component';
import { PageEditorComponent } from './components/page-editor/page-editor.component';
import { PageCreateComponent } from './components/page-create/page-create.component';
import { ControlHostDirective } from './directives/control-host/control-host.directive';
import { EnumToArrayPipe } from './pipes/enum-to-array.pipe';
import { CoreModule, IconSelectorComponent } from 'src/core';
import { KeyModule } from 'src/key';
import { VolumeModule } from 'src/volume';
import { FileSystemModule } from 'src/file-system';
import { ControlEditorComponent } from './components/control-editor/control-editor.component';
import { CreateControlComponent } from './components/create-control/create-control.component';
import { ControlViewComponent } from './components/control-view/control-view.component';
import { ControlEditorViewComponent } from './components/control-editor-view/control-editor-view.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    PageComponent,
    PageEditorComponent,
    PageCreateComponent,
    ControlHostDirective,
    EnumToArrayPipe,
    ControlEditorComponent,
    CreateControlComponent,
    ControlViewComponent,
    ControlEditorViewComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    SortablejsModule,
    RouterModule.forRoot([
      { path: '', component: PageCreateComponent, pathMatch: 'full' },
      { path: 'create', component: PageCreateComponent },
      { path: 'edit/:name', component: PageEditorComponent },
      { path: 'p/:name', component: PageComponent },
      { path: 'icon', component: IconSelectorComponent }
      ],
      { relativeLinkResolution: 'legacy' }),
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
