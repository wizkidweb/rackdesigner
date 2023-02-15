import { Inject, Injectable } from '@angular/core';
import { WithID } from 'ngx-indexed-db';
import { map, mergeMap, Observable, tap, throwError } from 'rxjs';
import { ModelServiceContract, PORT_SERVICE } from 'src/app/data/contracts/model-service-contract.interface';
import { Queried } from 'src/app/data/types/model.types';
import { Hardware } from 'src/app/models/hardware.model';
import { Port } from 'src/app/models/port.model';
import { LocalModelService } from '../abstracts/local-model.service';
import { LocalHardwareApiService } from '../api/hardware-api.service';
import { HardwareSchema } from '../schemas/hardware.schema';

@Injectable({
  providedIn: 'root'
})
export class LocalHardwareService
  extends LocalModelService<Hardware, HardwareSchema>
  implements ModelServiceContract<Hardware> {

  /**
   * Creates a new instance of local hardware service.
   * @param _apiService The local hardware API service.
   * @param _portService A dynamically-injected copy of the port service defined in the module.
   */
  constructor(
    protected _apiService: LocalHardwareApiService,
    @Inject(PORT_SERVICE) protected _portService: ModelServiceContract<Port>,
  ) {
    super();
  }

  /**
   * Queries for and adds port data to the loaded hardware.
   * @inheritDoc
   */
  public override find(id: number): Observable<Queried<Hardware>> {
    return super.find(id).pipe(
      mergeMap(hardware => this._addPorts(hardware)),
    );
  }

  /**
   * Queries for ports and adds to the given hardware.
   * @param hardware The hardware the ports are being added to.
   * @returns An observable with hardware with ports added.
   */
  protected _addPorts(hardware: Queried<Hardware>): Observable<Queried<Hardware>> {
    return this._portService.getByIndex('hardware_id', hardware.id).pipe(
      tap(ports => hardware.ports = ports),
      map(() => hardware),
    );
  }

  /**
   * @inheritDoc
   */
  protected _serialize(input: Hardware): HardwareSchema {
    return {
      name: input.name,
      size: input.size.toString(),
      maxDraw: input.maxDraw?.toString() || '',
      color: input.color?.toString() || '',
    }
  }

  /**
   * @inheritDoc
   */
  protected _deserialize(input: HardwareSchema & WithID): Queried<Hardware> {
    return Hardware.createQueried({
      id: input.id,
      name: input.name,
      size: parseInt(input.size),
      maxDraw: parseInt(input.maxDraw),
      color: input.color,
    });
  }
}
