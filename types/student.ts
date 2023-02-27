import { TStatuses } from "./general";
import { ICourse } from "./course";
import { ILevel } from "./level";
import { TGroupType } from "./groupType";
import { TBranch } from "./branch";
import { TSource } from "./hooks";
import { IContacts, IStudentAccountLabels } from "./contact";
import { ITimes } from "./times";
import { IUser } from "./user";

export interface IStudent {
  user_id: number;
  note: string;
  status: 200 | 100 | 300;
  type: 200 | 100 | 300;
}

export interface OneStudent {
  user_id: number;
  note: string;
  status: TStatuses;
  type: TStatuses;
  branch_id: number;
  source_id: number;
  course: ICourse;
  level: ILevel;
  groupType: TGroupType;
  branch: TBranch;
  source: TSource;
  currentGroupContact: IContacts;
  preferDays: any[];
  preferTimes: ITimes;
  permissionLabels: IStudentAccountLabels;
  user: IUser;
}
