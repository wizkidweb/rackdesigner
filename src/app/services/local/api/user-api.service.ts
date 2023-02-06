import { Injectable } from '@angular/core';
import { UserSchema } from 'src/app/services/local/schemas/user.schema';
import { LocalApiService } from '../abstracts/local-api.service';

@Injectable({
  providedIn: 'root'
})
export class LocalUserApiService extends LocalApiService<UserSchema> {
  protected storeName = 'users';
}
