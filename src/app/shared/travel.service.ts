import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

import { Travel } from './travel.model';

export class TravelService {
  travelSelected = new EventEmitter<Travel>();
  travelsChanged = new Subject<Travel[]>();

  travels: Travel[] = [];

  

  setTravels(travels: Travel[]) {
    if (travels) {
      this.travels = travels.slice();
      console.log('guarda qui', travels);
      // Copia gli elementi se travels non è null o undefined
    } else {
      this.travels = []; // Inizializza con un array vuoto se travels è null o undefined
    }
    //this.travelsChanged.next(this.travels.slice()); // Notifica il cambiamento
  }

  // Funzione per ottenere un viaggio in base all'ID
  getTravelById(index: number): Travel {
    return this.travels.find((travel) => travel.id === index);
  }

  getTravels(): Travel[] {
    return this.travels.slice();
  }
}
