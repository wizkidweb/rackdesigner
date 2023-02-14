import { Model } from "../data/abstracts/model";
import { Port } from "./port.model";

export class Hardware extends Model {
  /**
   * The primary ID.
   */
  public id?: number;

  /**
   * The name of the hardware.
   */
  public name!: string;

  /**
   * The size of the hardware, in "U".
   */
  public size!: number;

  /**
   * The ports being used in this hardware.
   */
  public ports?: Array<Port>;

  /**
   * The max power draw, in watts.
   */
  public maxDraw?: number;

  /**
   * The primary color of this hardware, as a hex value.
   */
  public color?: string;
}