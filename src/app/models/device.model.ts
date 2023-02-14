import { Model } from "../data/abstracts/model";
import { Hardware } from "./hardware.model";

export class Device extends Model {
  /**
   * The primary ID.
   */
  public id!: number;

  /**
   * The hardware used by this device.
   */
  public hardware!: Hardware;
}