import { EventEmitter } from '@angular/core';
import { Travel } from '../shared/travel.model';

export class TravelService {
  travelSelected = new EventEmitter<Travel>();

  travels: Travel[] = [
    new Travel(
      'Paris, France',
      7,
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Tour_Eiffel_7.jpg/220px-Tour_Eiffel_7.jpg',
      new Date('2024-05-15'),
      new Date('2024-05-22'),
      'John Doe',
      'Exciting trip to explore the beautiful city of Paris!'
    ),
    new Travel(
      'Tokyo, Japan',
      10,
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Tour_Eiffel_7.jpg/220px-Tour_Eiffel_7.jpg',
      new Date('2024-06-10'),
      new Date('2024-06-20'),
      'Jane Smith',
      'Unforgettable journey to experience the vibrant culture of Tokyo.'
    ),
  ];

  getTravels(): Travel[] {
    return this.travels.slice();
  }
}
