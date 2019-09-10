import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LogsComponent } from './components/logs/logs.component';
import { LogFormComponent } from './components/log-form/log-form.component';
import { LogService } from './services/log.service'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LogsComponent,
    LogFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
