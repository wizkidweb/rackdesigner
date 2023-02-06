import { Injectable } from "@angular/core";
import { NgxIndexedDBService, WithID } from "ngx-indexed-db";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export abstract class LocalApiService<Schema> {
  constructor(protected _dbService: NgxIndexedDBService) {}

  protected abstract storeName: string;

  public find(id: number): Observable<Schema & WithID> {
    return this._dbService.getByKey(this.storeName, id);
  }

  public get(): Observable<Array<Schema & WithID>> {
    return this._dbService.getAll(this.storeName);
  }

  public store(data: Schema): Observable<Schema & WithID> {
    return this._dbService.add(this.storeName, data);
  }

  public delete(id: number): Observable<Array<Schema & WithID>> {
    return this._dbService.delete(this.storeName, id);
  }
}