import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatTabsModule } from "@angular/material/tabs";
import {MatRadioModule} from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatTabsModule,
    MatRadioModule,
    MatButtonModule,
    MatIconModule,
    
  ],
  providers: [
    provideAnimationsAsync(),
    { provide: MAT_RADIO_DEFAULT_OPTIONS, useValue: { color: '0A7AFF' } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
