import { Component, Input } from '@angular/core';
import { Travel } from '../../../shared/travel.model';
import { TravelService } from '../../../shared/travel.service';

@Component({
  selector: 'app-travel-item',
  templateUrl: './travel-item.component.html',
  styleUrl: './travel-item.component.css',
})
export class TravelItemComponent {
  @Input() travel: Travel;

  constructor(private travelService: TravelService) {}

  // onSelected() {
  //   this.travelService.travelSelected.emit(this.travel);
  // }
}
