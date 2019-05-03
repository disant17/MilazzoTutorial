import { Component, OnInit, Input } from '@angular/core';
import { Prenotazione } from './prenotazione.model'; // <-- import this


@Component({
  selector: 'app-prenotazione',
  templateUrl: './prenotazione.component.html',
  styleUrls: ['./prenotazione.component.css']
})
export class PrenotazioneComponent implements OnInit {
  @Input() prenotazione:Prenotazione;
 

  constructor() { }

  ngOnInit() {
  }



}
