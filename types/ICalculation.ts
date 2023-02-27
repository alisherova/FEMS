export interface ICalculation {
  group?: {
    balance: number;
    debt: number;
    date_from: string;
    date_to: string;
    lesson_count: number;
  };
  student: {
    balance: null | number;
    debt: null | number;
  };
}
