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
  ngOnInit(): void {}
}
