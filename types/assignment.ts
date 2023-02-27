import { IUser } from "./user";
import { IRbacRole } from "./department";

export interface IAssignment {
  id: number;
  branch_type: 100;
  rbacRole: IRbacRole;
  rbacRoleShift: any;
  user: IUser;
}
