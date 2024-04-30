import { Component, OnInit } from '@angular/core';
import { Travel } from '../../shared/travel.model';
import { TravelService } from '../travel.service';
import { DataStorageService } from '../../shared/data-storage.service';

@Component({
  selector: 'app-travel-list',
  templateUrl: './travel-list.component.html',
  styleUrls: ['./travel-list.component.css'],
})
export class TravelListComponent implements OnInit {
  travels: Travel[];

  constructor(
    private travelService: TravelService,
    private dataStorageService: DataStorageService
  ) {}

  ngOnInit(): void {
    this.fetchTravels(); // Carica i viaggi all'inizio
  }

  onSaveData() {
    this.dataStorageService.storeTravels();
  }

  onRefreshData() {
    this.fetchTravels(); // Richiedi i viaggi nuovamente quando viene premuto il pulsante "aggiorna feed"
  }

  private fetchTravels() {
    this.dataStorageService.fetchTravels().subscribe(
      (travels: Travel[]) => {
        this.travelService.setTravels(travels); // Aggiorna i viaggi nel TravelService
        this.travels = this.travelService.getTravels(); // Ottieni i viaggi aggiornati
      },
      (error) => {
        console.log('Errore durante il recupero dei viaggi:', error);
      }
    );
  }
}
