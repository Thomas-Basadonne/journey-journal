import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Travel } from '../../shared/travel.model';
import { TravelService } from '../travel.service';

@Component({
  selector: 'app-travel-detail',
  templateUrl: './travel-detail.component.html',
  styleUrls: ['./travel-detail.component.css'],
})
export class TravelDetailComponent implements OnInit {
  travel: Travel;

  constructor(
    private route: ActivatedRoute,
    private travelService: TravelService
  ) {}

  ngOnInit(): void {
    // Recupera il parametro 'id' dall'URL
    this.route.params.subscribe((params: Params) => {
      const travelId = +params['id']; // Converte l'ID da stringa a numero
      this.travel = this.travelService.getTravelById(travelId);
    });
  }
}
