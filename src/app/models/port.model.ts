import { Model } from "../data/abstracts/model";

export enum PortSpeed {
  fast = 'Fast Ethernet (10/100 Mbps)',
  gigabit = 'Gigabit (10/100/1000 Mbps)',
  tengig = 'Ten Gigabit (10/100/1000/10000 Mbps)',
  hundredgig = '40/100 Gbps',
}

export enum PortType {
  rj45 = 'RJ45',
  sfp = 'SFP+',
}

export class Port extends Model {
  public id?: number;
  public hardware_id!: number;
  public type!: PortType;
  public xPos!: number;
  public yPos!: number;
  public output?: number;

  public get typeDisplay(): string {
    if (this.type) {
      return this.type;
    }

    return 'None';
  }
}