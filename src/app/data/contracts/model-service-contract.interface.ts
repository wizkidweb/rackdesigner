import { InjectionToken } from "@angular/core";
import { Observable } from "rxjs";
import { Hardware } from "src/app/models/hardware.model";
import { Port } from "src/app/models/port.model";
import { Rack } from "src/app/models/rack.model";
import { User } from "src/app/models/user.model";
import { Model } from "../abstracts/model";
import { Queried } from "../types/model.types";

export const USER_SERVICE = new InjectionToken<ModelServiceContract<User>>('user.service');
export const HARDWARE_SERVICE = new InjectionToken<ModelServiceContract<Hardware>>('hardware.service');
export const RACK_SERVICE = new InjectionToken<ModelServiceContract<Rack>>('rack.service');
export const PORT_SERVICE = new InjectionToken<ModelServiceContract<Port>>('port.service');

export interface ModelServiceContract<M extends Model> {
  /**
   * Queries a single instance of the model.
   * @param id The ID of the model to query.
   * @returns An observable containing the model instance.
   */
  find(id: number): Observable<Queried<M>>;
  
  /**
   * Queries for all instances of the model.
   * @returns An observable containing an array of model instances.
   */
  get(): Observable<Array<Queried<M>>>;

  /**
   * Queries for all instances of the model matching the given index and ID.
   * @param index The index with which to filter the results.
   * @param id The ID of the index defined.
   * @returns An observable containing an array of matching model instances.
   */
  getByIndex(index: string, id: number): Observable<Array<Queried<M>>>;

  /**
   * Stores the given model into a database.
   * @param data The model to store.
   * @returns The newly stored model.
   */
  store(data: M): Observable<M>;

  /**
   * Deletes the model with the given ID from the database.
   * @param id The ID of the model to delete.
   * @returns A fresh list of models from the database.
   */
  delete(id: number): Observable<Array<Queried<M>>>;
}