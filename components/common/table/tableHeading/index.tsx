import React, {CSSProperties} from "react";
import { Heading } from "./style";

interface IProps {
  text?:string;
  children?:any;
  padding?:boolean;
  style?:CSSProperties;
}
const TableHeading = ({ text, children, padding = false,style}: IProps) => {
  return (
    <Heading padding={padding} style={style}>
      {text || children}
    </Heading>
  );
};

export default TableHeading;
