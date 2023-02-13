import { Injectable } from '@angular/core';
import { WithID } from 'ngx-indexed-db';
import { ModelServiceContract } from 'src/app/data/contracts/model-service-contract.interface';
import { Port } from 'src/app/models/port.model';
import { LocalModelService } from '../abstracts/local-model.service';
import { LocalPortApiService } from '../api/port-api.service';
import { PortSchema } from '../schemas/port.schema';

@Injectable({
  providedIn: 'root'
})
export class LocalPortService extends LocalModelService<Port, PortSchema> implements ModelServiceContract<Port> {
  constructor(protected _apiService: LocalPortApiService) {
    super();
  }

  protected _serialize(input: Port): PortSchema {
    return {
      hardware_id: input.hardware_id,
      type: input.type,
      xPos: input.xPos.toString(),
      yPos: input.yPos.toString(),
      output: input.output?.toString() || '',
    }
  }

  protected _deserialize(input: PortSchema & WithID): Port {
    return Port.create({
      id: input.id,
      hardware_id: input.hardware_id,
      type: input.type,
      xPos: parseInt(input.xPos),
      yPos: parseInt(input.yPos),
      output: parseInt(input.output),
    });
  }
}
