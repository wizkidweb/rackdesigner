import { InjectionToken } from "@angular/core";
import { Observable } from "rxjs";
import { Hardware } from "src/app/models/hardware.model";
import { Port } from "src/app/models/port.model";
import { Rack } from "src/app/models/rack.model";
import { User } from "src/app/models/user.model";
import { Model } from "../abstracts/model";

export const USER_SERVICE = new InjectionToken<ModelServiceContract<User>>('user.service');
export const RACK_SERVICE = new InjectionToken<ModelServiceContract<Rack>>('rack.service');
export const HARDWARE_SERVICE = new InjectionToken<ModelServiceContract<Hardware>>('hardware.service');
export const PORT_SERVICE = new InjectionToken<ModelServiceContract<Port>>('port.service');

export interface ModelServiceContract<M extends Model> {
  find(id: number): Observable<M>;
  get(): Observable<Array<M>>;
  store(data: M): Observable<M>;
  delete(id: number): Observable<Array<M>>;
}