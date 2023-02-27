import { TStatuses } from "./general";

export interface IAttendance {
  id: number;
  date: string;
  group_contact_id: string;
  reason: null | string;
  status: TStatuses;
}
