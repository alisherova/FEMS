import { ICourse } from "./course";
import { TGroupType } from "./groupType";
import { ILevel } from "./level";
import { TBranch } from "./branch";
import { IRoom } from "./rooms";
import { IDay } from "./day";
import { ITimes } from "./times";
import { ITeacher } from "./teacher";
import { TStatuses } from "./general";
import { TCompany } from "./hooks";

export interface IAdminGroupInitialPage extends TCompany {
  courses: ICourse[];
  group_types: TGroupType[];
  levels: ILevel[];
  branches: TBranch[];
  rooms: IRoom[];
  days: IDay[];
  times: ITimes[];
  teachers: ITeacher[];
  supports?: ITeacher[];
  tabs: ITab[];
}

type ITab = {
  [key in TStatuses]: {
    name: string;
    attribute: string;
    value: key;
  };
};
