import { Injectable } from '@angular/core';
import { WithID } from 'ngx-indexed-db';
import { ModelServiceContract } from 'src/app/data/contracts/model-service-contract.interface';
import { Port, PortType } from 'src/app/models/port.model';
import { LocalModelService } from '../abstracts/local-model.service';
import { LocalPortApiService } from '../api/port-api.service';
import { PortSchema } from '../schemas/port.schema';

@Injectable({
  providedIn: 'root'
})
export class LocalPortService extends LocalModelService<Port, PortSchema> implements ModelServiceContract<Port> {
  /**
   * Creates a new instance of local port service.
   * @param _apiService The local port API service.
   */
  constructor(protected _apiService: LocalPortApiService) {
    super();
  }
  
  /**
   * @inheritDoc
   */
  protected _serialize(input: Port): PortSchema {
    return {
      hardware_id: input.hardware_id,
      type: input.type,
      xPos: input.xPos.toString(),
      yPos: input.yPos.toString(),
      output: input.output?.toString() || '',
    }
  }

  /**
   * @inheritDoc
   */
  protected _deserialize(input: PortSchema & WithID): Port {
    return Port.create({
      id: input.id,
      hardware_id: input.hardware_id,
      type: input.type as PortType,
      xPos: parseInt(input.xPos),
      yPos: parseInt(input.yPos),
      output: parseInt(input.output),
    });
  }
}
