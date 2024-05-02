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
  isLoading = false;

  constructor(
    private travelService: TravelService,
    private dataStorageService: DataStorageService
  ) {}

  ngOnInit(): void {
    this.fetchTravels(); // Carica i viaggi all'inizio
  }



  onRefreshData() {
    this.fetchTravels(); // Richiedi i viaggi nuovamente quando viene premuto il pulsante "aggiorna feed"
  }

  private fetchTravels() {
    this.isLoading = true;
    this.dataStorageService.fetchTravels().subscribe(
      (travels: Travel[]) => {
        // Aggiorna i viaggi nel TravelService
        this.travelService.setTravels(travels);
        // Ottieni i viaggi aggiornati
        this.travels = this.travelService.getTravels();
        this.isLoading = false;
      },
      (error) => {
        console.log('Errore durante il recupero dei viaggi:', error);
        this.isLoading = false; // Assicurati che isLoading venga impostato su false anche in caso di errore
      }
    );
  }
}
