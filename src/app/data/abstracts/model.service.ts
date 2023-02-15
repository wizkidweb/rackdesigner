import { Queried } from '../types/model.types';
import { Model } from './model';

export abstract class ModelService<M extends Model, Schema> {
  /**
   * Deserializes the given input schema into the model defined for the service.
   * @param input 
   * @returns A new model instance. 
   */
  protected abstract _deserialize(input: Schema): Queried<M>;
  
  /**
   * Deserializes an array of input schemas into an array of models.
   * @see {@link _deserialize}
   * @param input 
   * @returns An array of new model instances.
   */
  protected _deserializeArray(input: Array<Schema>): Array<Queried<M>> {
    return input.map(item => this._deserialize(item));
  }
}
