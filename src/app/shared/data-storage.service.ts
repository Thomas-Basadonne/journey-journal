import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TravelService } from '../travel-feed/travel.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(private http: HttpClient, private travelService: TravelService) {}
  storeTravels() {
    const travels = this.travelService.getTravels();
    this.http
      .put(
        'https://journey-journal-34a78-default-rtdb.europe-west1.firebasedatabase.app/travels.json',
        travels
      )
      .subscribe((response) => {
        console.log(response);
      });
  }
}
