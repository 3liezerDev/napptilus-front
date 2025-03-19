import { useEffect, useState } from "react";
import { getPhones } from "../services/phonesApi";
import { PHONE_FIELDS } from "../constants/apiFields"; 

export const usePhones = () => {  // ✅ Exportación nombrada correcta
    const [phones, setPhones] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchPhones = async () => {
        setLoading(true);
        const data = await getPhones();
        const mappedPhones = data.map((phone) => ({
          id: phone[PHONE_FIELDS.ID],
          brand: phone[PHONE_FIELDS.BRAND],
          name: phone[PHONE_FIELDS.NAME],
          basePrice: phone[PHONE_FIELDS.BASE_PRICE],
          imageUrl: phone[PHONE_FIELDS.IMAGE_URL],
        }));
  
        setPhones(mappedPhones);
        setLoading(false);
      };
  
      fetchPhones();
    }, []);
  
    return { phones, loading };
  };
  
