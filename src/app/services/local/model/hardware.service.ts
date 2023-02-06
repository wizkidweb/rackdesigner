import { Injectable } from '@angular/core';
import { WithID } from 'ngx-indexed-db';
import { map, Observable } from 'rxjs';
import { ModelServiceContract } from 'src/app/data/contracts/model-service-contract.interface';
import { Hardware } from 'src/app/models/hardware.model';
import { LocalModelService } from '../abstracts/local-model.service';
import { LocalHardwareApiService } from '../api/hardware-api.service';
import { HardwareSchema } from '../schemas/hardware.schema';

@Injectable({
  providedIn: 'root'
})
export class LocalHardwareService extends LocalModelService<Hardware, HardwareSchema>
  implements ModelServiceContract<Hardware> {

  constructor(protected _apiService: LocalHardwareApiService) {
    super();
  }

  protected _serialize(input: Hardware): HardwareSchema {
    return {
      name: input.name,
      size: input.size.toString(),
      maxDraw: input.maxDraw?.toString() || '',
      color: input.color?.toString() || '',
    }
  }

  protected _deserialize(input: HardwareSchema & WithID): Hardware {
    return Hardware.create({
      id: input.id,
      name: input.name,
      size: parseInt(input.size),
      maxDraw: parseInt(input.maxDraw),
      color: input.color,
    });
  }
}
