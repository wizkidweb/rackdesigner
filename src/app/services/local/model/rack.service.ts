import { Injectable } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';
import { ModelService } from 'src/app/data/abstracts/model.service';
import { RackServiceContract } from 'src/app/data/contracts/rack-service-contract.interface';
import { Rack } from 'src/app/models/rack.model';
import { RackSchema } from 'src/app/services/local/schemas/rack.schema';
import { LocalRackApiService } from '../api/rack-api.service';
import { WithID } from 'ngx-indexed-db';

@Injectable({
  providedIn: 'root',
})
export class LocalRackService extends ModelService<Rack, RackSchema> implements RackServiceContract {
  constructor(private _rackApiService: LocalRackApiService) {
    super();
  }

  public find(id: number): Observable<Rack> {
    return this._rackApiService.find(id).pipe(
      map(res => this._deserialize(res)),
    );
  }

  public get(): Observable<Array<Rack>> {
    return this._rackApiService.get().pipe(
      map(res => this._deserializeArray(res)),
    );
  }

  public store(rack: Rack): Observable<Rack> {
    return this._rackApiService.store({
      name: rack.name,
      size: rack.size.toString(),
    }).pipe(
      map(rack => this._deserialize(rack)),
    );
  }

  protected _deserialize(input: RackSchema & WithID): Rack {
    return Rack.create({
      id: input.id,
      name: input.name,
      size: parseInt(input.size),
    });
  }
}
