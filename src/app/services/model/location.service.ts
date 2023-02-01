import { Injectable } from '@angular/core';
import { ModelService } from 'src/app/abstracts/model.service';
import { Location } from 'src/app/models/location.model';
import { LocationSchema } from 'src/app/schemas/location.schema';
import { LocationApiService } from '../api/location-api.service';

@Injectable({
  providedIn: 'root'
})
export class LocationService extends ModelService<Location, LocationSchema> {
  constructor(private _locationApiService: LocationApiService) {
    super();
  }

  public find(): Location {
    return this._deserialize(this._locationApiService.find(1));
  }

  public get(): Array<Location> {
    return this._deserializeArray(this._locationApiService.get());
  }

  protected _deserialize(input: LocationSchema): Location {
    return Location.create({
      id: input.id,
      name: input.name,
    })
  }
}
