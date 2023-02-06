import { Model } from "../data/abstracts/model";

export class Port extends Model {
  public id!: number;
  public type!: string;
  public xPos!: number;
  public yPos!: number;
  public output?: number;
}