import { Injectable } from '@angular/core';
import { ModelService } from 'src/app/abstracts/model.service';
import { Rack } from 'src/app/models/rack.model';
import { RackSchema } from 'src/app/schemas/rack.schema';
import { RackApiService } from '../api/rack-api.service';

@Injectable({
  providedIn: 'root'
})
export class RackService extends ModelService<Rack, RackSchema> {
  constructor(private _rackApiService: RackApiService) {
    super();
  }

  public find(): Rack {
    return this._deserialize(this._rackApiService.find(1));
  }

  public get(): Array<Rack> {
    return this._deserializeArray(this._rackApiService.get());
  }

  protected _deserialize(input: RackSchema): Rack {
    return Rack.create({
      id: input.id,
      name: input.name,
      size: input.size,
    })
  }
}
