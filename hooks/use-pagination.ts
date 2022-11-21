import { useRef, useCallback, Dispatch, SetStateAction } from "react";
import { ISearch } from "../components/hero details/types";

export const useHandlePagination = (
  data: ISearch[],
  page: number,
  setPage: Dispatch<SetStateAction<number>>,
  totalResults: string
) => {
  const movieListObserver = useRef<IntersectionObserver | null>(null);
  const lastElementRef = useCallback(
    (node: HTMLElement | null) => {
      if (Number(totalResults) < data?.length + 1) return;
      if (movieListObserver.current) movieListObserver?.current?.disconnect();
      movieListObserver.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPage((page) => page + 1);
        }
      });
      if (node) movieListObserver?.current.observe(node);
    },
    [data]
  );
  return { lastElementRef };
};
