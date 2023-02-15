import { Model } from "../abstracts/model";

export interface QueriedModelProps {
  id: number,
}

export type Queried<M extends Model> = M & QueriedModelProps;