import Pagination from "./pagination";
import React, { FC, useEffect, useState } from "react";
import {
  StyledPaginationBlock,
  StyledPaginationButtonArrow,
  StyledPaginationButtonWrapper,
  StyledPaginationPerPageBlock,
  StyledPaginationPerPageContainer,
  StyledPaginationPerPageSelect,
  StyledPaginationPerPageText,
  StyledPaginationWrapper,
} from "./style";
import { MySelect } from "components";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

interface IBasePagination {
  pageIndex: number;
  total: number;
  isWatchPage?: boolean;
  pageSize?: Array<number>;
}

const Index: FC<IBasePagination> = ({
  pageIndex,
  total,
  pageSize = [20, 40, 60, 80, 100],
  isWatchPage = false,
}) => {
  const { control, watch } = useForm();
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState<number>(
    Number(router.query.page) || pageIndex
  );
  const [pageSizeValue, setPageSizeValue] = useState<number>(
    Number(router.query.pageSize) || 20
  );

  const canPreviousPage: boolean = currentPage > 0;
  const canNextPage: boolean = currentPage <= total;

  const gotoPage = (value: number) => {
    const path = router.pathname;
    const query = router.query;
    // @ts-ignore
    query.page = value;
    setCurrentPage(value);
    router.push({
      pathname: path,
      query: query,
    });
  };

  useEffect(() => {
    if (isWatchPage) {
      setCurrentPage(pageIndex);
    }
  }, [isWatchPage, pageIndex]);
  const setPageSize = (value: number) => {
    const path = router.pathname;
    const query = router.query;
    // @ts-ignore
    query.pageSize = value;
    setPageSizeValue(value);
    router.push({
      pathname: path,
      query: query,
    });
  };

  const previousPage = () => {
    gotoPage(currentPage - 1);
  };

  const nextPage = () => {
    gotoPage(currentPage + 1);
  };

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      if (type === "change" && name === "perPage") {
        setPageSize(value?.perPage);
      }
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <StyledPaginationWrapper>
      <StyledPaginationBlock colSpan={12}>
        <StyledPaginationPerPageContainer>
          <StyledPaginationPerPageBlock>
            <StyledPaginationPerPageText>
              {pageIndex} of {total}
            </StyledPaginationPerPageText>
            <StyledPaginationPerPageText>|</StyledPaginationPerPageText>
            <StyledPaginationPerPageText>
              Rows per page
            </StyledPaginationPerPageText>
            <StyledPaginationPerPageSelect>
              <MySelect
                name="perPage"
                style={{ minWidth: "70px" }}
                allowClear={false}
                label=""
                defaultValue={{
                  label: pageSizeValue,
                  value: pageSizeValue,
                }}
                control={control}
                options={pageSize.map((pageS) => ({
                  label: String(pageS),
                  value: String(pageS),
                }))}
              />
            </StyledPaginationPerPageSelect>
          </StyledPaginationPerPageBlock>
          <StyledPaginationBlock>
            <StyledPaginationButtonWrapper>
              <StyledPaginationButtonArrow onClick={() => previousPage()}>
                <span className={!canPreviousPage ? "disabled left" : "left"}>
                  {"<"}
                </span>
              </StyledPaginationButtonArrow>
              <Pagination
                total={total}
                pageIndex={currentPage}
                gotoPage={gotoPage}
              />
              <StyledPaginationButtonArrow onClick={() => nextPage()}>
                <span className={!canNextPage ? "disabled right" : "right"}>
                  {">"}
                </span>
              </StyledPaginationButtonArrow>
            </StyledPaginationButtonWrapper>
          </StyledPaginationBlock>
        </StyledPaginationPerPageContainer>
      </StyledPaginationBlock>
    </StyledPaginationWrapper>
  );
};

export default Index;
