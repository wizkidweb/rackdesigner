import { Injectable } from "@angular/core";
import { WithID } from "ngx-indexed-db";
import { delay, map, Observable } from "rxjs";
import { Model } from "src/app/data/abstracts/model";
import { ModelService } from "src/app/data/abstracts/model.service";
import { ModelServiceContract } from "src/app/data/contracts/model-service-contract.interface";
import { Queried } from "src/app/data/types/model.types";
import { LocalApiService } from "./local-api.service";

@Injectable({
  providedIn: 'root'
})
export abstract class LocalModelService<M extends Model, Schema> extends ModelService<M, Schema> implements ModelServiceContract<M> {
  /**
   * An instance of a Local API service to use.
   */
  protected abstract _apiService: LocalApiService<Schema>;

  /**
   * Serializes the given model into the related API schema.
   * @param input The model to serialize.
   */
  protected abstract _serialize(input: M): Schema;

  /**
   * @inheritDoc
   */
  protected abstract override _deserialize(input: Schema & WithID): Queried<M>;

  /**
   * Waits for 200ms to simulate external database.
   * @inheritDoc
   */
  public find(id: number): Observable<Queried<M>> {
    return this._apiService.find(id).pipe(
      map(res => this._deserialize(res)),
      delay(200),
    );
  }

  /**
   * Waits for 200ms to simulate external database.
   * @inheritDoc
   */
  public get(): Observable<Array<Queried<M>>> {
    return this._apiService.get().pipe(
      map(res => this._deserializeArray(res)),
      delay(200),
    );
  }

  /**
   * Waits for 200ms to simulate external database.
   * @inheritDoc
   */
  public getByIndex(index: string, id: number): Observable<Array<Queried<M>>> {
    return this._apiService.getByIndex(index, id).pipe(
      map(res => this._deserializeArray(res)),
      delay(200),
    );
  }

  /**
   * Waits for 200ms to simulate external database.
   * @inheritDoc
   */
  public store(model: M): Observable<Queried<M>> {
    return this._apiService.store(this._serialize(model)).pipe(
      map(res => this._deserialize(res)),
      delay(200),
    );
  }

  /**
   * Waits for 200ms to simulate external database.
   * @inheritDoc
   */
  public delete(id: number): Observable<Array<Queried<M>>> {
    return this._apiService.delete(id).pipe(
      map(res => this._deserializeArray(res)),
      delay(200),
    );
  }
}