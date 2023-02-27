import { TStatuses } from "./general";
import { TMeta } from "./common";

export interface IStudentPayment {
  list: IPaymentList[];
  meta: TMeta;
}

export interface IPaymentList {
  date: string;
  amount: string;
  payment_type: TStatuses;
  full_name: string;
  role: string;
  type: TStatuses;
}
