import axios, { CancelToken } from "axios";
import { IForm } from "interface/form";
import { MouseEvent, useCallback, useEffect, useState } from "react";
import { makeToast } from "shared/toaster";
import { GeneralAPIsActions } from "utils/apis/actions";

export const usePagination = <T>(
  url: string,
  type?: "Forms" | "Questions" | "Options",
  initialData?: T[]
) => {
  const [data, setData] = useState<T[]>(initialData || []);
  const [page, setPage] = useState<number>(0);
  const [loading, setLoading] = useState(true);
  const [paginationResponse] = useState<unknown>({});

  const onNext = () => {
    setPage((prev) => prev + 1);
  };

  const onPrevious = () => {
    if (page === 1) {
      return;
    }
    setPage((prev) => prev - 1);
  };

  const onPageSet = (pageNumber: number) => {
    setPage(pageNumber);
  };

  const goToFirstPage = () => {
    setPage(1);
  };

  const goToLastPage = () => {
    setPage(5);
  };

  const getData = useCallback(
    async (token: CancelToken) => {
      setLoading(true);
      const response = (await GeneralAPIsActions.getData<T[]>(
        url,
        token
      ).finally(() => {
        setLoading(false);
      })) as unknown as { data: T[] };
      setData(response.data);
    },
    [url]
  );

  useEffect(() => {
    const source = axios.CancelToken.source();
    getData(source.token);
    return () => {
      source.cancel();
    };
  }, [getData]);

  const onDelete = async (e: MouseEvent<SVGSVGElement>) => {
    const { index, url } = e.currentTarget.dataset;
    const confirm = window.confirm("Are you sure?");
    if (index && url) {
      if (confirm) {
        await GeneralAPIsActions.deleteData(url);
        makeToast({
          type: "success",
          message: "Deleted Successfully",
        });
        setData((prev) => prev.filter((_, idx) => idx !== +index));
      }
    }
  };

  useEffect(() => {
    if (["Forms", "Questions", "Options"].includes(type as string)) {
      (data as IForm[]).sort((a, b) => a.priority - b.priority);
    }
  }, [data, type]);

  return {
    data,
    loading,
    onNext,
    onPrevious,
    onPageSet,
    goToFirstPage,
    goToLastPage,
    paginationResponse,
    onDelete,
  };
};
