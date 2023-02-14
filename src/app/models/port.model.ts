import { Model } from "../data/abstracts/model";

/**
 * A list of supported port speeds.
 */
export enum PortSpeed {
  fast = 'Fast Ethernet (10/100 Mbps)',
  gigabit = 'Gigabit (10/100/1000 Mbps)',
  tengig = 'Ten Gigabit (10/100/1000/10000 Mbps)',
  hundredgig = '40/100 Gbps',
}

/**
 * A list of supported port types.
 */
export enum PortType {
  rj45 = 'RJ45',
  sfp = 'SFP+',
}

export class Port extends Model {
  /**
   * The primary ID.
   */
  public id?: number;

  /**
   * The hardware ID this port belongs to.
   */
  public hardware_id!: number;

  /**
   * The type of this port.
   */
  public type!: PortType;

  /**
   * The X grid position of this port in the related hardware.
   */
  public xPos!: number;

  /**
   * The Y grid position of this port in the related hardware.
   */
  public yPos!: number;

  /**
   * The max output power, in watts.
   */
  public output?: number;

  /**
   * The display value for the currently selected type.
   */
  public get typeDisplay(): string {
    return this.type || 'None';
  }
}