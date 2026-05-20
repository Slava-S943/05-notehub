import type { ComponentType } from "react";
import ReactPaginateModule from "react-paginate";
import type { ReactPaginateProps } from "react-paginate";

import css from "./Pagination.module.css";

type ModuleWithDefault<T> = { default: T };

const ReactPaginate = (
  ReactPaginateModule as unknown as ModuleWithDefault<
    ComponentType<ReactPaginateProps>
  >
).default;

interface PaginationProps {
  page: number;
  totalPages: number;
  setPage: (selectedPage: number) => void;
}

export default function Pagination({
  page,
  totalPages,
  setPage,
}: PaginationProps) {
  return (
    <ReactPaginate
      pageCount={totalPages}
      forcePage={page - 1}
      onPageChange={({ selected }: { selected: number }) =>
        setPage(selected + 1)
      }
      containerClassName={css.pagination}
      activeClassName={css.active}
      pageClassName={css.page}
      previousLabel="←"
      nextLabel="→"
      breakLabel="..."
    />
  );
}
