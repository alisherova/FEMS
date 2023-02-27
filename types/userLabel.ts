import { IUser } from "./user";
import { TStatuses } from "./general";

export interface UserLabel {
  id: number;
  type: TStatuses;
  datetime: string;
  note: null;
  color: string;
  user: IUser;
}
