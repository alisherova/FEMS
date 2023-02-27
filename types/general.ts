import { TMeta } from "./common";

export enum EGroupType {
  NOGROUP = "noGroup",
  FULLPAID = "fullPaid",
  FULL = "full",
  NOTFULL = "notFull",
  NODESIGN = "noDesign",
  DEFAULT = "default",
}

export enum EPayment {
  YELLOW = "yellow",
  RED = "red",
  GREEN = "green",
  UNDEFINED = "undefined",
}

export enum EStudentAttendance {
  CAME = "came",
  NOT_CAME = "not_came",
  STAR = "star",
  ABS = "abs",
  ADD = "add",
  UNAVAILABLE = "unavailable",
  WHITE = "white",
}

export enum EAttendanceStatuses {
  CAME = 100,
  NOT_CAME = 200,
  ABS = 300,
  UNAVAILABLE = 400,
  ADD = 500,
  STAR = 600,
  WHITE = 700,
}

export enum EPayment {
  CASH = 100,

  MOT = 200,

  BANK = 300,
}

export type TStatuses = 100 | 200 | 300 | 400 | 500 | 600 | 700;

export type TGeneral = {
  [key: string]: string;
};

export type Status = {
  [key in TStatuses]: string;
};

export interface IFetchList<T> {
  list: Array<T>;
  meta: TMeta;
}

export type IPromiseData<T> = Promise<IFetchList<T>>;
