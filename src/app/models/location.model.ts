import { Model } from "../data/abstracts/model";

export class Location extends Model {
  /**
   * The primary ID.
   */
  public id!: number;

  /**
   * The name of this location.
   */
  public name!: string;
}