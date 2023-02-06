import { Model } from "../data/abstracts/model";

export class User extends Model {
  id!: number;
  name!: string;
  email!: string;
}