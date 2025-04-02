import { useState, useEffect } from "react";
import { useDebounce } from "./useDebounce";

export const usePhoneFilter = (onSearch) => {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 650);

  useEffect(() => {
    const q = debouncedQuery.trim().toLowerCase();

    if (q.length >= 3) {
      onSearch(q); // 🔍 Búsqueda activa
    } else {
      onSearch(""); // 🔄 Reset: muestra todos
    }
  }, [debouncedQuery, onSearch]);

  return {
    query,
    setQuery,
    debouncedQuery, // ✅ expuesto para validaciones externas (ej: Enter)
  };
};
