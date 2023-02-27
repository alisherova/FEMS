import { IUser } from "./user";

export interface LifeCycle {
  id: number;
  scenario: number;
  data: LifeCycleData;
  description: string;
  datetime: string;
  ip_address: string;
  lifeCycleLinks: LifeCycleLink[];
  createdBy: IUser;
}

interface LifeCycleLink {
  id: number;
  life_cycle_id: number;
  model_id: number;
  model_type: number;
}

interface LifeCycleData {
  to_group_name: string;
  transferred_at: string;
  from_group_name: string;
  student_balance: number;
  to_contact_debt: number;
  from_contact_debt: number;
  student_full_name: string;
  to_contact_balance: number;
  from_contact_balance: number;
  from_contact_original_date_to: null | string;
  from_contact_original_date_from: string;
}
