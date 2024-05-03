import { Component } from '@angular/core';
import { Travel } from '../../../shared/travel.model';
import { AuthService } from '../../../auth/auth.service';
import { TravelService } from '../../../shared/travel.service';

@Component({
  selector: 'app-travel-form',
  templateUrl: './travel-form.component.html',
  styleUrl: './travel-form.component.css',
})
export class TravelFormComponent {
  travel: Travel = new Travel(
    null,
    '',
    0,
    '',
    new Date(),
    new Date(),
    '',
    '',
    ''
  );

  constructor(private travelService: TravelService) {}

  onSubmit() {
    // // Chiamata al servizio per aggiungere un nuovo viaggio
    // this.travelService.addTravel(this.travel);
  }

  // constructor(private authService: AuthService, private travelService: TravelService) {}

  //onSubmit() {
  //   // Ottieni l'ID dell'utente autenticato
  //   const userId = this.authService.getUserId();

  //   // Assegna l'ID dell'utente al campo travelerId del viaggio
  //   this.travel.travelerId = userId;

  //   // Invia il viaggio al servizio per salvarlo nel database
  //   this.travelService.createTravel(this.travel);

  //   // Resetta il form dopo la creazione del viaggio
  //   this.travel = new Travel();
  // }
}
