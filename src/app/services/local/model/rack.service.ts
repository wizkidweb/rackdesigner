import { Injectable } from '@angular/core';
import { Rack } from 'src/app/models/rack.model';
import { RackSchema } from 'src/app/services/local/schemas/rack.schema';
import { LocalRackApiService } from '../api/rack-api.service';
import { WithID } from 'ngx-indexed-db';
import { LocalModelService } from '../abstracts/local-model.service';
import { ModelServiceContract } from 'src/app/data/contracts/model-service-contract.interface';

@Injectable({
  providedIn: 'root',
})
export class LocalRackService extends LocalModelService<Rack, RackSchema> implements ModelServiceContract<Rack> {
  /**
   * Creates a new instance of local rack service.
   * @param _apiService The local rack API service.
   */
  constructor(protected _apiService: LocalRackApiService) {
    super();
  }

  /**
   * @inheritDoc
   */
  protected _serialize(input: Rack): RackSchema {
    return {
      name: input.name,
      size: input.size.toString(),
    }
  }

  /**
   * @inheritDoc
   */
  protected _deserialize(input: RackSchema & WithID): Rack {
    return Rack.create({
      id: input.id,
      name: input.name,
      size: parseInt(input.size),
    });
  }
}
