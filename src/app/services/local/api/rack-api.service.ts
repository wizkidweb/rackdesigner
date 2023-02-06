import { Injectable } from '@angular/core';
import { RackSchema } from 'src/app/services/local/schemas/rack.schema';
import { LocalApiService } from '../abstracts/local-api.service';

@Injectable({
  providedIn: 'root'
})
export class LocalRackApiService extends LocalApiService<RackSchema> {
  protected storeName = 'racks';
}
