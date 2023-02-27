import { IStudent } from "./student";
import { UserLabel } from "./userLabel";
import { IUserPhone } from "./userPhone";
import { IUserProfile } from "./userProfile";
import { IContactResponsibles } from "./contactResponsibles";
import { RbacAssignment } from "./rbacAssignment";

export interface IUser {
  id: number;
  username: string;
  email: string;
  status: 100 | 200;
  created_at: string;
  student?: IStudent;
  userLabels?: UserLabel;
  userPhones?: IUserPhone[];
  userProfile?: IUserProfile;
  contactResponsibles?: IContactResponsibles[];
  rbacAssignment?: RbacAssignment;
}

export enum EUser {
  S100 = 100,
  S200 = 200,
  S300 = 300,
}
