import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PrenotazioneComponent } from './prenotazione/prenotazione.component';
import { ListaprenotazioniComponent } from './listaprenotazioni/listaprenotazioni.component';

@NgModule({
  declarations: [
    AppComponent,
    PrenotazioneComponent,
    ListaprenotazioniComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
