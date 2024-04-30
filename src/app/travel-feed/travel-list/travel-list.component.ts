import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Travel } from '../../shared/travel.model';
import { TravelService } from '../travel.service';
import { DataStorageService } from '../../shared/data-storage.service';

@Component({
  selector: 'app-travel-list',
  templateUrl: './travel-list.component.html',
  styleUrl: './travel-list.component.css',
})
export class TravelListComponent implements OnInit {
  travels: Travel[];

  constructor(
    private travelService: TravelService,
    private dataStorageService: DataStorageService
  ) {}

  ngOnInit(): void {
    this.travels = this.travelService.getTravels();
  }

  onSaveData() {
    this.dataStorageService.storeTravels();
  }
}
