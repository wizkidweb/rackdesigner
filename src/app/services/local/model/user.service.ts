import { Injectable } from '@angular/core';
import { UserSchema } from 'src/app/services/local/schemas/user.schema';
import { User } from 'src/app/models/user.model';
import { WithID } from 'ngx-indexed-db';
import { UserServiceContract } from 'src/app/data/contracts/user-service-contract.interface';
import { LocalModelService } from '../abstracts/local-model.service';
import { LocalUserApiService } from '../api/user-api.service';

@Injectable({
  providedIn: 'root'
})
export class LocalUserService extends LocalModelService<User, UserSchema> implements UserServiceContract {
  constructor(protected _apiService: LocalUserApiService) {
    super();
  }

  protected _serialize(input: User): UserSchema {
    return {
      name: input.name,
      email: input.email,
    };
  }

  protected _deserialize(input: UserSchema & WithID): User {
    return User.create({
      id: input.id,
      name: input.name,
      email: input.email,
    });
  }
}
