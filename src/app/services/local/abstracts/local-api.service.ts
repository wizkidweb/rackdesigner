import { Injectable } from "@angular/core";
import { NgxIndexedDBService, WithID } from "ngx-indexed-db";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export abstract class LocalApiService<Schema> {
  /**
   * Creates a new instance of local API service.
   * @param _dbService An indexed DB service for local storage.
   */
  constructor(protected _dbService: NgxIndexedDBService) {}

  /**
   * The local store name to use in this service.
   */
  protected abstract storeName: string;

  /**
   * Finds a single resource with the given ID.
   * @param id The ID of the resource to query.
   * @returns An observable of the given response schema with an appended ID.
   */
  public find(id: number): Observable<Schema & WithID> {
    return this._dbService.getByKey(this.storeName, id);
  }

  /**
   * Gets all instances of this resource.
   * @returns An observable array of all response schemas with an appended ID.
   */
  public get(): Observable<Array<Schema & WithID>> {
    return this._dbService.getAll(this.storeName);
  }

  /**
   * Gets all instances of this resource filtered by the given index and ID.
   * @param index The index to query by.
   * @param id The ID of the index.
   * @returns An observable array of all filtered responses schemas with an appended ID.
   */
  public getByIndex(index: string, id: number): Observable<Array<Schema & WithID>> {
    return this._dbService.getAllByIndex(this.storeName, index, IDBKeyRange.only(id));
  }

  /**
   * Stores the given data.
   * @param data The data to store.
   * @returns An observable of the stored schema.
   */
  public store(data: Schema): Observable<Schema & WithID> {
    return this._dbService.add(this.storeName, data);
  }

  /**
   * Deletes the entity with the given ID.
   * @param id The ID of the resource to delete.
   * @returns An observable of all schemas with an appended ID.
   */
  public delete(id: number): Observable<Array<Schema & WithID>> {
    return this._dbService.delete(this.storeName, id);
  }
}