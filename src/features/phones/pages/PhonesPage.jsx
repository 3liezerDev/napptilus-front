import { useState, useCallback } from "react";
import { PhoneFilter } from "../components/phoneFilter/PhoneFilter";
import PhoneList from "../components/phoneList/PhoneList";
import { usePhones } from "../hooks/usePhones";
import { motion } from "framer-motion";

const pageTransition = {
  type: "spring",
  mass: 1,
  stiffness: 80,
  damping: 20,
};

const PhonesPage = () => {
  const [searchQuery, setSearchQuery] = useState(""); // ✅ Estado del input de búsqueda
  const { phones, loading } = usePhones(searchQuery); // ✅ Pasamos el query a usePhones

  // ✅ Memoriza `setSearchQuery` para que no se recree en cada render
  const handleSearch = useCallback((query) => {
    setSearchQuery(query);
  }, []);

  return (
    <motion.div
    className="phones-grid-page"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={pageTransition}
  >
      <PhoneFilter onSearch={handleSearch} totalResults={phones.length} />
      <PhoneList phones={phones} loading={loading} />
    </motion.div>
  );
};

export default PhonesPage;
