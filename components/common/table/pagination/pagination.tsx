import {styled} from "@mui/material/styles";
import React, {FC} from "react";
import {ListItem} from "./style";

interface IPagination {
  pageIndex: number;
  total: number;
  gotoPage: Function;
}

const List =
  styled('ul')({
    listStyle: 'none',
    padding: "3px 4px",
    margin: 0,
    display: 'inline-flex',
  });

const Pagination: FC<IPagination> = ({total, pageIndex, gotoPage}) => {
  let children: Array<number|"..."> = [];
  if (total < 7) {
    for (let i = 0; i < total; i++) {
      children.push(i+1);
    }
  } else {
    if (pageIndex % 5 >= 0 && pageIndex > 4 && pageIndex + 2 < total) {
      children = [1, '...', pageIndex - 1, pageIndex, pageIndex + 1, '...', total];
    } else if (pageIndex % 5 >= 0 && pageIndex > 4 && pageIndex + 2 >= total) {
      children = [1, '...', total - 3, total - 2, total - 1, total];
    } else {
      children = [1, 2, 3, 4, 5, "...", total];
    }
  }

  return (
    <List>
      {children.map((item, index) => {
        return (
          <ListItem
            key={index}
            onClick={() => gotoPage(Number(item))}
            className={pageIndex == Number(item) ? 'active' : (isNaN(item as number) ? 'disabled' : '')}
          >
            {item}
          </ListItem>
        );
      })}
    </List>
  );
}

export default Pagination;