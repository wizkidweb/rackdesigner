import { InjectionToken } from "@angular/core";
import { Observable } from "rxjs";
import { Hardware } from "src/app/models/hardware.model";

export const HARDWARE_SERVICE = new InjectionToken<HardwareServiceContract>('hardware.service');

export interface HardwareServiceContract {
  find(id: number): Observable<Hardware>;
  get(): Observable<Array<Hardware>>;
  store(hardware: Hardware): Observable<Hardware>;
  delete(id: number): Observable<Array<Hardware>>;
}