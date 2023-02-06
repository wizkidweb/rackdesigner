import { Model } from './model';

export abstract class ModelService<T extends Model, Schema> {
  protected abstract _deserialize(input: Schema): T;
  
  protected _deserializeArray(input: Array<Schema>): Array<T> {
    return input.map(item => this._deserialize(item));
  }
}
