import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NgxIndexedDBService, WithID } from 'ngx-indexed-db';
import { HardwareSchema } from 'src/app/services/local/schemas/hardware.schema';

@Injectable({
  providedIn: 'root'
})
export class LocalHardwareApiService {
  constructor(private _dbService: NgxIndexedDBService) {}

  public find(id: number): Observable<HardwareSchema & WithID> {
    return this._dbService.getByKey('hardware', id);
  }

  public get(): Observable<Array<HardwareSchema & WithID>> {
    return this._dbService.getAll('hardware');
  }

  public store(hardware: HardwareSchema): Observable<HardwareSchema & WithID> {
    return this._dbService.add('hardware', hardware);
  }

  public delete(id: number): Observable<Array<HardwareSchema & WithID>> {
    return this._dbService.delete('hardware', id);
  }
}
