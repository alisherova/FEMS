// export interface IRole {
//   permissions: {
//     [key: string]: string[];
//   };
//   shift_type: any;
//   shifts: TShi;
// }

export interface IRole {
  id: number;
  name: string;
  type: number;
  degree: number;
  shift_type: number;
  permissions: IPermission[];
  shifts: IShift[];
}
export interface IPermission {
  id: number;
  permission: string;
  type: any;
}
export interface IShift {
  id: number;
  name: string;
  days: IDayRole[];
}
export interface IDayRole {
  id: number;
  week_day: number;
  start_time: string;
  end_time: string;
}
