import { useState, useEffect } from "react";

export const useDebounce = (value, delay = 300) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler); // Limpiamos timeout si el valor cambia antes de ejecutarse
    };
  }, [value, delay]);

  return debouncedValue;
};
