// src/hooks/usePhoneById.js
import { useQuery } from "@tanstack/react-query";
import { getPhoneById } from "../services/phonesApi";

export const usePhoneById = (id) => {
  return useQuery({
    queryKey: ["phone", id],
    queryFn: () => getPhoneById(id),
    enabled: !!id, // solo se ejecuta si hay id
    staleTime: 1000 * 60 * 5, // 5 minutos
    cacheTime: 1000 * 60 * 10,
    retry: 1,
  });
};
