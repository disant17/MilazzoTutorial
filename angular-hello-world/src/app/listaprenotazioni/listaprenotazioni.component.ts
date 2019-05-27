import { Component, OnInit, Input} from '@angular/core';
import { Prenotazioni } from '../prenotazione.model'; // <-- import this
@Component({
  selector: 'app-listaprenotazioni',
  templateUrl: './listaprenotazioni.component.html',
  styleUrls: ['./listaprenotazioni.component.css']
})
export class ListaprenotazioniComponent implements OnInit {

@Input() pren = new Array<Prenotazioni>();

      selectedp: Prenotazioni;

  constructor() {

  }
  onSelect(prenotazione: Prenotazioni){
      this.selectedp = prenotazione;
 }

  ngOnInit() {
  }

}
