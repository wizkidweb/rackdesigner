import { Injectable } from "@angular/core";
import { WithID } from "ngx-indexed-db";
import { delay, map, Observable } from "rxjs";
import { Model } from "src/app/data/abstracts/model";
import { ModelService } from "src/app/data/abstracts/model.service";
import { LocalApiService } from "./local-api.service";

@Injectable({
  providedIn: 'root'
})
export abstract class LocalModelService<M extends Model, Schema> extends ModelService<M, Schema> {
  protected abstract _apiService: LocalApiService<Schema>;

  protected abstract _serialize(input: M): Schema;

  protected abstract override _deserialize(input: Schema & WithID): M;

  public find(id:number): Observable<M> {
    return this._apiService.find(id).pipe(
      map(res => this._deserialize(res)),
      delay(200),
    );
  }

  public get(): Observable<Array<M>> {
    return this._apiService.get().pipe(
      map(res => this._deserializeArray(res)),
      delay(200),
    );
  }

  public getByIndex(index: string, id: number): Observable<Array<M>> {
    return this._apiService.getByIndex(index, id).pipe(
      map(res => this._deserializeArray(res)),
      delay(200),
    );
  }

  public store(model: M): Observable<M> {
    return this._apiService.store(this._serialize(model)).pipe(
      map(res => this._deserialize(res)),
      delay(200),
    );
  }

  public delete(id: number): Observable<Array<M>> {
    return this._apiService.delete(id).pipe(
      map(res => this._deserializeArray(res)),
      delay(200),
    );
  }
}