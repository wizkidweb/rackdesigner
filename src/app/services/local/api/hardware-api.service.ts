import { Injectable } from '@angular/core';
import { HardwareSchema } from 'src/app/services/local/schemas/hardware.schema';
import { LocalApiService } from '../abstracts/local-api.service';

@Injectable({
  providedIn: 'root'
})
export class LocalHardwareApiService extends LocalApiService<HardwareSchema> {
  /**
   * @inheritDoc
   */
  protected storeName = 'hardware';
}
