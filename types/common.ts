import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";

export type ErrorType =
  | string
  | FieldError
  | Merge<FieldError, FieldErrorsImpl<any>>
  | undefined;

export type TParams = {
  [key: string]: any;
};

export type TMeta = {
  totalCount: number;
  pageCount: number;
  currentPage: number;
  perPage: number;
};

export type TUpdateFunctions = {
  onSuccess: (...args:any) => void;
  onError: (...args:any) => void;
};
