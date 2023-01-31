import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/abstracts/api.service';
import { RackSchema } from 'src/app/schemas/rack.schema';

@Injectable({
  providedIn: 'root'
})
export class RackApiService extends ApiService<RackSchema> {
  public get(): Array<RackSchema> {
    return [ this.find() ];
  }

  public find(): RackSchema {
    return {
      id: 'foo',
      name: 'Foobar',
    };
  }
}
