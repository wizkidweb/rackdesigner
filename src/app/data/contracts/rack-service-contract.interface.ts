import { InjectionToken } from "@angular/core";
import { Observable } from "rxjs";
import { Rack } from "src/app/models/rack.model";

export const RACK_SERVICE = new InjectionToken<RackServiceContract>('rack.service');

export interface RackServiceContract {
  find(id: number): Observable<Rack>;
  get(): Observable<Array<Rack>>;
  store(rack: Rack): Observable<Rack>;
}