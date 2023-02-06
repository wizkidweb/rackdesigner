import { Injectable } from '@angular/core';
import { WithID } from 'ngx-indexed-db';
import { map, Observable } from 'rxjs';
import { ModelService } from 'src/app/data/abstracts/model.service';
import { HardwareServiceContract } from 'src/app/data/contracts/hardware-service-contracts.interface';
import { Hardware } from 'src/app/models/hardware.model';
import { LocalHardwareApiService } from '../api/hardware-api.service';
import { HardwareSchema } from '../schemas/hardware.schema';

@Injectable({
  providedIn: 'root'
})
export class LocalHardwareService extends ModelService<Hardware, HardwareSchema>
  implements HardwareServiceContract {
  constructor(private _hardwareApiService: LocalHardwareApiService) {
    super();
  }

  public find(id: number): Observable<Hardware> {
    return this._hardwareApiService.find(id).pipe(
      map(res => this._deserialize(res)),
    );
  }

  public get(): Observable<Array<Hardware>> {
    return this._hardwareApiService.get().pipe(
      map(res => this._deserializeArray(res)),
    );
  }

  public store(hardware: Hardware): Observable<Hardware> {
    return this._hardwareApiService.store({
      name: hardware.name,
      size: hardware.size.toString(),
      maxDraw: hardware.maxDraw?.toString() || '',
      color: hardware.color?.toString() || '',
    }).pipe(
      map(res => this._deserialize(res)),
    )
  }

  public delete(id: number): Observable<Array<Hardware>> {
    return this._hardwareApiService.delete(id).pipe(
      map(res => this._deserializeArray(res)),
    );
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
