import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserSchema } from 'src/app/services/local/schemas/user.schema';
import { NgxIndexedDBService, WithID } from 'ngx-indexed-db';

@Injectable({
  providedIn: 'root'
})
export class LocalUserApiService {
  constructor(private _dbService: NgxIndexedDBService) {}

  public find(id: number): Observable<UserSchema & WithID> {
    return this._dbService.getByKey('users', id);
  }

  public get(): Observable<Array<UserSchema & WithID>> {
    return this._dbService.getAll('users');
  }
}
