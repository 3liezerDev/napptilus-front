import { useState, useCallback } from "react";
import { PhoneFilter } from "../components/phoneFilter/PhoneFilter";
import PhoneList from "../components/phoneList/PhoneList";
import { usePhones } from "../hooks/usePhones";

const PhonesPage = () => {
  const [searchQuery, setSearchQuery] = useState(""); // ✅ Estado del input de búsqueda
  const { phones, loading } = usePhones(searchQuery); // ✅ Pasamos el query a usePhones

  // ✅ Memoriza `setSearchQuery` para que no se recree en cada render
  const handleSearch = useCallback((query) => {
    setSearchQuery(query);
  }, []);

  return (
    <div>
      <PhoneFilter onSearch={handleSearch} totalResults={phones.length} />
      <PhoneList phones={phones} loading={loading} />
    </div>
  );
};

export default PhonesPage;
