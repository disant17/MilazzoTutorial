import { Component } from '@angular/core';
import { Prenotazioni } from './prenotazione.model'; // <-- import this
import { HttpClient } from '@angular/common/http'; // importalo per http richieste

import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-bacheca';
    oPren: Observable<Prenotazioni[]>;
    prenotazioni: Prenotazioni[] =[];
  constructor(public http: HttpClient) {
    //Fai la get e ottieni la lista di articoli e riempi il vettore articles
    this.prenotazioni = new Array<Prenotazioni>();
    this.oPren = this.http.get<Prenotazioni[]>('https://my-json-server.typicode.com/Lucas2000s/InformaticaMilazzo/prenotazioni');
    this.oPren.subscribe(this.ricevidati);
  }

  aggiungi(nome : HTMLInputElement, cognome : HTMLInputElement, ind : HTMLInputElement ): boolean {
      this.prenotazioni.push (new Prenotazioni ( nome.value, cognome.value, ind.value) );
      return false;
  }

    ricevidati = (data) => {
      for(let p of data){
        this.prenotazioni.push (new Prenotazioni ( p.Nome, p.Cognome, p.Indirizzo));
      }
    //Se non ci fossero metodi, basterebbe fare così
}

}
