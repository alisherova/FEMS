import { IUser } from "./user";

export interface IGroupMentor {
  id: string;
  company_id?: string;
  group_id?: string;
  user_id: string;
  type: 100 | 200;
  version_id: string;
  user?: IUser;
}
