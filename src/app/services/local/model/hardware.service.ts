import { Inject, Injectable } from '@angular/core';
import { WithID } from 'ngx-indexed-db';
import { map, mergeMap, Observable, tap, throwError } from 'rxjs';
import { ModelServiceContract, PORT_SERVICE } from 'src/app/data/contracts/model-service-contract.interface';
import { Hardware } from 'src/app/models/hardware.model';
import { Port } from 'src/app/models/port.model';
import { LocalModelService } from '../abstracts/local-model.service';
import { LocalHardwareApiService } from '../api/hardware-api.service';
import { LocalPortApiService } from '../api/port-api.service';
import { HardwareSchema } from '../schemas/hardware.schema';

@Injectable({
  providedIn: 'root'
})
export class LocalHardwareService extends LocalModelService<Hardware, HardwareSchema>
  implements ModelServiceContract<Hardware> {

  constructor(
    protected _apiService: LocalHardwareApiService,
    @Inject(PORT_SERVICE) protected _portService: ModelServiceContract<Port>,
  ) {
    super();
  }

  public override find(id: number): Observable<Hardware> {
    return super.find(id).pipe(
      mergeMap(hardware => this._addPorts(hardware)),
    );
  }

  protected _addPorts(hardware: Hardware): Observable<Hardware> {
    if (!hardware.id) {
      return throwError(() => new Error('Hardware ID is invalid!'));
    }

    return this._portService.getByIndex('hardware_id', hardware.id).pipe(
      tap(ports => hardware.ports = ports),
      map(() => hardware),
    );
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
