import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TravelService } from './travel.service';
import { Travel } from './travel.model';
import { Observable, of, throwError } from 'rxjs';
import { catchError, exhaustMap, take } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  travels: Travel[];

  constructor(
    private http: HttpClient,
    private travelService: TravelService,
    private authService: AuthService
  ) {}

  // storeTravels() {
  //   const travels = this.travelService.getTravels();
  //   this.http
  //     .put(
  //       'https://journey-journal-34a78-default-rtdb.europe-west1.firebasedatabase.app/travels.json',
  //       travels
  //     )
  //     .subscribe((response) => {
  //       console.log(response);
  //     });
  // }

  storeTravels() {
    this.authService.user
      .pipe(
        take(1),
        exhaustMap((user) => {
          if (user && user.token) {
            const travels = this.travelService.getTravels();
            return this.http.put(
              'https://journey-journal-34a78-default-rtdb.europe-west1.firebasedatabase.app/travels.json?auth=' +
                user.token,
              travels
            );
          } else {
            // L'utente non è autenticato o non ha un token, non eseguire lo store dei viaggi
            console.log('Utente non autenticato o token non disponibile');
            return of(null); // Ritorna un observable vuoto o gestisci l'errore in modo appropriato
          }
        })
      )
      .subscribe(
        (response) => {
          console.log('Dati viaggi salvati con successo:', response);
        },
        (error) => {
          console.log('Errore durante il salvataggio dei viaggi:', error);
        }
      );
  }

  // storeTravels(travels: Travel[]) {
  //   this.authService.user.subscribe((user) => {
  //     if (user && user.token) {
  //       this.http
  //         .put(
  //           `https://journey-journal-34a78-default-rtdb.europe-west1.firebasedatabase.app/travels.json?auth=${user.token}`,
  //           travels
  //         )
  //         .subscribe((response) => {
  //           console.log('Viaggio salvato con successo:', response);
  //         });
  //     }
  //   });
  // }

  fetchTravels(): Observable<Travel[]> {
    return this.authService.user.pipe(
      take(1),
      exhaustMap((user) => {
        if (user && user.token) {
          // Se l'utente è loggato e ha un token, esegui la richiesta HTTP con il token
          return this.http.get<Travel[]>(
            'https://journey-journal-34a78-default-rtdb.europe-west1.firebasedatabase.app/travels.json?auth=' +
              user.token
          );
        } else {
          // Se l'utente non è loggato o non ha un token, esegui la richiesta HTTP senza token
          return this.http
            .get<Travel[]>(
              'https://journey-journal-34a78-default-rtdb.europe-west1.firebasedatabase.app/travels.json'
            )
            .pipe(
              catchError(() => {
                // Gestisci eventuali errori qui, ad esempio restituendo un array vuoto
                return of([] as Travel[]);
              })
            );
        }
        // return this.http.get<Travel[]>(
        //   'https://journey-journal-34a78-default-rtdb.europe-west1.firebasedatabase.app/travels.json?auth=' +
        //     user.token
        // );
      })
    );
  }
}
