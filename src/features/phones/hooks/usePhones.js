import { useEffect, useState } from "react";
import { getPhones, searchPhones } from "../services/phonesApi"; // ✅ Importamos ambas funciones
import { PHONE_FIELDS } from "../constants/apiFields";
import { useDebounce } from "../hooks/useDebounce"; // ✅ Implementamos debounce

export const usePhones = (searchQuery) => {  // ✅ Ahora recibe `searchQuery`
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const debouncedQuery = useDebounce(searchQuery, 300); // ✅ Evita múltiples llamadas a la API

  useEffect(() => {
    const fetchPhones = async () => {
      setLoading(true);
      const data = debouncedQuery ? await searchPhones(debouncedQuery) : await getPhones();
      
      if (!Array.isArray(data)) {
        console.error("❌ Error: los datos recibidos no son un array.");
        setPhones([]);
      } else {
        setPhones(
          data.map((phone) => ({
            id: phone[PHONE_FIELDS.ID],
            brand: phone[PHONE_FIELDS.BRAND],
            name: phone[PHONE_FIELDS.NAME],
            basePrice: phone[PHONE_FIELDS.BASE_PRICE],
            imageUrl: phone[PHONE_FIELDS.IMAGE_URL],
          }))
        );
      }

      setLoading(false);
    };

    fetchPhones();
  }, [debouncedQuery]); // ✅ Llamamos la API solo cuando `searchQuery` cambia

  return { phones, loading };
};
