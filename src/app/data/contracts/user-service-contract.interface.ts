import { InjectionToken } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "src/app/models/user.model";

export const USER_SERVICE = new InjectionToken<UserServiceContract>('user.service');

export interface UserServiceContract {
  find(id: number): Observable<User>;
  get(): Observable<Array<User>>;
}