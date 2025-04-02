import { useQuery } from "@tanstack/react-query";
import { getPhones } from "../services/phonesApi";
import { useDebounce } from "./useDebounce";
import { useMemo } from "react";

export const usePhones = (searchQuery) => {
  const debouncedQuery = useDebounce(searchQuery, 300);

  const {
    data: phones = [],
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["phones"],
    queryFn: getPhones,
    staleTime: 1000 * 60 * 5, // 5 minutos
    refetchOnWindowFocus: true,
    refetchOnMount: true,
    retry: 2,
    keepPreviousData: true
  });

  const filteredPhones = useMemo(() => {
    const q = debouncedQuery.trim().toLowerCase();

    if (!q || q.length < 3) return phones;

    return phones.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q)
    );
  }, [debouncedQuery, phones]);

  return {
    phones: filteredPhones,
    isLoading,
    isError,
    refetch,
  };
};
