import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RackSchema } from 'src/app/services/local/schemas/rack.schema';
import { NgxIndexedDBService, WithID } from 'ngx-indexed-db';

@Injectable({
  providedIn: 'root'
})
export class LocalRackApiService {
  constructor(private _dbService: NgxIndexedDBService) {}

  public find(id: number): Observable<RackSchema & WithID> {
    return this._dbService.getByKey('racks', id);
  }

  public get(): Observable<Array<RackSchema & WithID>> {
    return this._dbService.getAll('racks');
  }

  public store(rack: RackSchema): Observable<RackSchema & WithID> {
    return this._dbService.add('racks', rack);
  }
}
