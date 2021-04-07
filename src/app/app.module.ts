import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { FormsModule } from '@angular/forms';
import { ChildComponentComponent } from './child/child-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    NgSwitchComponent,
    ChildComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
