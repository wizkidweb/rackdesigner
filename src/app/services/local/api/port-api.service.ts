import { Injectable } from '@angular/core';
import { LocalApiService } from '../abstracts/local-api.service';
import { PortSchema } from '../schemas/port.schema';

@Injectable({
  providedIn: 'root'
})
export class LocalPortApiService extends LocalApiService<PortSchema> {
  protected storeName = 'ports';
}
