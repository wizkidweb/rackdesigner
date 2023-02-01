import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/abstracts/api.service';
import { LocationSchema } from 'src/app/schemas/location.schema';

@Injectable({
  providedIn: 'root'
})
export class LocationApiService extends ApiService<LocationSchema> {
  public get(): Array<LocationSchema> {
    return [ this.find(1) ];
  }
  
  public find(id: number): LocationSchema {
    return {
      id: id,
      name: 'Location 1',
    }
  }
}
