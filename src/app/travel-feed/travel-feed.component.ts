import { Component, OnInit } from '@angular/core';
import { TravelService } from '../shared/travel.service';
import { Travel } from '../shared/travel.model';

@Component({
  selector: 'app-travel-feed',
  templateUrl: './travel-feed.component.html',
  styleUrl: './travel-feed.component.css',
})
export class TravelFeedComponent implements OnInit {
  selectedTravel: Travel;

  constructor(private travelService: TravelService) {}

  ngOnInit(): void {
    this.travelService.travelSelected.subscribe(
      (travel: Travel) => (this.selectedTravel = travel)
    );
  }
}
