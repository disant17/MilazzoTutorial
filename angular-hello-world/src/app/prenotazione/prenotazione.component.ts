import { Component, OnInit, Input} from '@angular/core';
import { Prenotazioni } from '../prenotazione.model'; // <-- import this

@Component({
  selector: 'app-prenotazione',
  templateUrl: './prenotazione.component.html',
  styleUrls: ['./prenotazione.component.css']
})
export class PrenotazioneComponent implements OnInit {

  constructor() { }

  @Input() ciao:Prenotazioni;

  ngOnInit() {
  }

}
