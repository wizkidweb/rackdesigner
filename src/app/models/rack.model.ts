import { Model } from "../abstracts/model";

export class Rack extends Model {
  public id!: number;
  public name!: string;
  public size!: number;
}