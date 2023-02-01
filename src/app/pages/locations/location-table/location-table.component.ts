import { Component, OnInit } from '@angular/core';
import { Location } from 'src/app/models/location.model';
import { LocationService } from 'src/app/services/model/location.service';

@Component({
  selector: 'app-location-table',
  templateUrl: './location-table.component.html',
  styleUrls: ['./location-table.component.scss']
})
export class LocationTableComponent implements OnInit {
  public locations: Array<Location> = [];

  constructor(private _locationService: LocationService) {}

  public ngOnInit(): void {
    this.locations = this._locationService.get();
  }
}
