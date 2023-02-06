import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ModelService } from 'src/app/data/abstracts/model.service';
import { UserSchema } from 'src/app/services/local/schemas/user.schema';
import { User } from 'src/app/models/user.model';
import { LocalUserApiService } from '../api/user-api.service';
import { WithID } from 'ngx-indexed-db';

@Injectable({
  providedIn: 'root'
})
export class LocalUserService extends ModelService<User, UserSchema> {
  constructor(private _userApiService: LocalUserApiService) {
    super();
  }

  public find(id: number): Observable<User> {
    return this._userApiService.find(id).pipe(
      map(res => this._deserialize(res)),
    );
  }

  public get(): Observable<Array<User>> {
    return this._userApiService.get().pipe(
      map(res => this._deserializeArray(res)),
    );
  }

  protected _deserialize(input: UserSchema & WithID): User {
    return User.create({
      id: input.id,
      name: input.name,
      email: input.email,
    });
  }
}
