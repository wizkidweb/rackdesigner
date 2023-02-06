import { Injectable } from '@angular/core';
import { RackServiceContract } from 'src/app/data/contracts/rack-service-contract.interface';
import { Rack } from 'src/app/models/rack.model';
import { RackSchema } from 'src/app/services/local/schemas/rack.schema';
import { LocalRackApiService } from '../api/rack-api.service';
import { WithID } from 'ngx-indexed-db';
import { LocalModelService } from '../abstracts/local-model.service';

@Injectable({
  providedIn: 'root',
})
export class LocalRackService extends LocalModelService<Rack, RackSchema> implements RackServiceContract {
  constructor(protected _apiService: LocalRackApiService) {
    super();
  }

  protected _serialize(input: Rack): RackSchema {
    return {
      name: input.name,
      size: input.size.toString(),
    }
  }

  protected _deserialize(input: RackSchema & WithID): Rack {
    return Rack.create({
      id: input.id,
      name: input.name,
      size: parseInt(input.size),
    });
  }
}
