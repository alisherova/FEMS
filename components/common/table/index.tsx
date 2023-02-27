import React, { CSSProperties, FC } from "react";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { bgColors, fontSizes, textColors } from "styles/theme";
import { Table, TableContainer } from "@mui/material";
import { StyledTable } from "./style";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import { styled } from "@mui/material/styles";
import TableBody from "@mui/material/TableBody";
import { useTable } from "react-table";
import TableFooter from "@mui/material/TableFooter";
import Pagination from "./pagination";
import { opacityRows } from "constants/studentRowColor";
import TableSkeleton from "./skeleton";
import { Empty } from "antd";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    // backgroundColor: bgColors.transparent,
    color: textColors.gray40,
    letterSpacing: "-0.01em",
    fontWeight: 600,
    fontSize: fontSizes.f12,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
  root: {
    borderBottom: "none",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme, color }) => ({
  position: "relative",
  "&:nth-of-type(even)": {
    backgroundColor: color || bgColors.slate10,
  },
  "&:nth-of-type(odd)": {
    backgroundColor: color || bgColors.white,
  },
  // "&:last-child td, &:last-child th": {
  //   backgroundColor: color || bgColors.white,
  // },
}));

interface IBasicTable {
  columns: any[];
  data: any[];
  bgRowCell?: string;
  styles?: React.CSSProperties;
  headBorder?: boolean;
  isSticky?: boolean;
  stickyIndexOfColumn?: number;
  border?: any;
  paddingRow?: number;
  bottomBorderColor?: string;
  tableRowColor?: string;
  divideTableNumber?: number;
  headerRowStyle?: React.CSSProperties;
  hasPagination?: boolean;
  pageCount?: number;
  currentPage?: number;
  alignment?: boolean;
  divideRowNumber?: number;
  isWatchPage?: boolean;
  isLoading?: boolean;
  rowColors?: { [key: number]: string };
  tdStyles?: CSSProperties;
}

const BasicTable: FC<IBasicTable> = ({
  columns,
  data,
  alignment,
  bgRowCell,
  headBorder,
  styles,
  isSticky,
  stickyIndexOfColumn = 0,
  border,
  paddingRow,
  bottomBorderColor,
  tableRowColor,
  divideTableNumber,
  headerRowStyle,
  hasPagination = false,
  pageCount = 10,
  currentPage = 1,
  rowColors,
  divideRowNumber,
  isLoading,
  isWatchPage,
  tdStyles,
}) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
    defaultColumn: {
      width: "20px",
    },
  });
  return (
    <StyledTable
      divideTableNumber={divideTableNumber}
      divideRowNumber={divideRowNumber}
    >
      {isLoading ? (
        <TableSkeleton />
      ) : !!data?.length ? (
        <TableContainer>
          <Table
            aria-label="customized table"
            sx={{
              [`& .${tableCellClasses.root}`]: {
                borderBottom: `1px solid ${bgColors.transparent}`,
                border: headBorder ? border : null,
                paddingY: `${paddingRow}px` || "5px",
                margin: 0,
                ...styles,
              },
            }}
          >
            <colgroup>
              <col className="ten"/>
              <col className="ten"/>
            </colgroup>
            <TableHead>
              {headerGroups.map((headerGroup, headerGroupsIndex) => (
                <TableRow key={headerGroupsIndex}>
                  {headerGroup.headers.map((column, headerIndex) => (
                    <StyledTableCell
                      style={{ borderBottom: border }}
                      sx={
                        isSticky && headerIndex === stickyIndexOfColumn
                          ? { position: "sticky", left: 0 }
                          : {}
                      }
                      {...column.getHeaderProps({})}
                    >
                      {column.render("Header")}
                    </StyledTableCell>
                  ))}
                </TableRow>
              ))}
            </TableHead>
            <TableBody {...getTableBodyProps()}>
              {rows.map((row, rowIndex) => {
                prepareRow(row);
                const status = row?.original?.status;
                return (
                  <StyledTableRow
                    color={tableRowColor || rowColors?.[status]}
                    style={{
                      opacity:
                        opacityRows[status as keyof typeof opacityRows] || 1,
                    }}
                    {...row.getRowProps()}
                    key={rowIndex}
                  >
                    {row.cells.map((cell, cellIndex) => {
                      return (
                        <StyledTableCell
                          style={
                            alignment && cellIndex !== 0
                              ? {
                                  ...tdStyles,
                                  // backgroundColor: bgRowCell,
                                  border: border,
                                  textAlign: "center",
                                }
                              : {
                                  ...tdStyles,
                                  backgroundColor: bgRowCell,
                                  border: border,
                                }
                          }
                          sx={
                            isSticky && cellIndex === stickyIndexOfColumn
                              ? {
                                  position: "sticky",
                                  left: 0,
                                }
                              : {}
                          }
                          {...cell.getCellProps({})}
                          key={cellIndex}
                        >
                          {cell.render("Cell")}
                        </StyledTableCell>
                      );
                    })}
                  </StyledTableRow>
                );
              })}
            </TableBody>
            {hasPagination && (
              <TableFooter>
                <Pagination
                  pageIndex={currentPage}
                  total={pageCount}
                  isWatchPage={isWatchPage}
                />
              </TableFooter>
            )}
          </Table>
        </TableContainer>
      ) : (
        <Empty style={{ padding: "40px" }} />
      )}
    </StyledTable>
  );
};

export default BasicTable;
