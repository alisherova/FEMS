import { IUser } from "./user";
import { IActualPayment } from "./actualPayment";
import { ITransfer } from "./transfer";
import { IGroup } from "./group";
import { IContactResponsible } from "./contactResponsible";
import { faIR } from "date-fns/locale";

export interface IContacts {
  id: number;
  status: 100 | 200 | 300 | 400 | 500 | 600;
  start_date: null;
  added_date: string;
  finish_date: string;
  student_next_status: null;
  user?: IUser;
  actualPayment?: IActualPayment;
  actualTransfers: ITransfer[];
  contactResponsibles: IContactResponsible[];
  group: IGroup;
  transferredFrom?: IContacts;
  permission_actions: IStudentAccountActions;
}

export interface IStudentAccountActions {
  delete: boolean;
  move: boolean;
  transfer: boolean;
  stop: boolean;
  attend: boolean;
  transfer_back: boolean;
  activate: boolean;
}

export interface IStudentAccountLabels {
  start_date: boolean;
  coming: boolean;
  will_pay: boolean;
  call_request: boolean;
  not_answered: boolean;
  podo: boolean;
  colour_change: boolean;
}
