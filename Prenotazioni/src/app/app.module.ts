import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'; //Aggiungiamo qui
import { HttpClientModule } from '@angular/common/http'; //Importa Il modulo http
import { AppComponent } from './app.component';
import { PrenotazioneComponent } from './prenotazione/prenotazione.component';

@NgModule({
  declarations: [
    AppComponent,
    PrenotazioneComponent
  ],
  imports: [
    BrowserModule ,NgbModule , HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
