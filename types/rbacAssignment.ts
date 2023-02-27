import { IUser } from "./user";
import { TStatuses } from "./general";

export interface RbacAssignment {
  id: number;
  branch_type: number;
  rbacRole: IRbackRole;
  rbacRoleShift: null;
  user: IUser;
}

export interface IRbackRole {
  id: number;
  name: string;
  type: TStatuses;
  degree: TStatuses;
  shift_type: null;
}
