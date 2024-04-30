import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TravelService } from '../travel-feed/travel.service';
import { Travel } from './travel.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  travels: Travel[];
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

  fetchTravels(): Observable<Travel[]> {
    this.http;
    return this.http.get<Travel[]>(
      'https://journey-journal-34a78-default-rtdb.europe-west1.firebasedatabase.app/travels.json'
    );
  }
}
