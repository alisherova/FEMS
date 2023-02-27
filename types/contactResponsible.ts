import { IUser } from "./user";

export interface IContactResponsible {
  id: number;
  type: number;
  user: IUser;
  contact_id: number;
  user_id: number;
  datetime: string;
}
