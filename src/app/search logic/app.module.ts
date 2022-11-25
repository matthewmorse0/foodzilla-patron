
import { FormsModule } from '@angular/forms';
import {NgModule } from '@angular/core';
import {AppComponent} from './app.component';
import {FilterPipe} from './pipes/filter.pipe';
import{BrowseModule} from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe
  ],
  imports:[
    BrowseModule,
    FormsModule
  ],
bootstrap: [AppComponent]
})
export class AppModule{}

