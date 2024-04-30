import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

import { Travel } from '../shared/travel.model';

export class TravelService {
  travelSelected = new EventEmitter<Travel>();
  travelsChanged = new Subject<Travel[]>();

  // travels: Travel[] = [
  //   new Travel(
  //     0,
  //     'Paris, France',
  //     7,
  //     'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Tour_Eiffel_7.jpg/220px-Tour_Eiffel_7.jpg',
  //     new Date('2024-05-15'),
  //     new Date('2024-05-22'),
  //     'John Doe',
  //     'Exciting trip to explore the beautiful city of Paris!'
  //   ),
  //   new Travel(
  //     1,
  //     'Tokyo, Japan',
  //     10,
  //     'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Tour_Eiffel_7.jpg/220px-Tour_Eiffel_7.jpg',
  //     new Date('2024-06-10'),
  //     new Date('2024-06-20'),
  //     'Jane Smith',
  //     'Unforgettable journey to experience the vibrant culture of Tokyo.'
  //   ),
  // ];

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
    console.log('e qua invece', this.travels);
  }
}
