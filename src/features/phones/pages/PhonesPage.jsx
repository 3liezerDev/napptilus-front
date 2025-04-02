import { useState, useCallback } from "react";
import { PhoneFilter } from "../components/phoneFilter/PhoneFilter";
import PhoneList from "../components/phoneList/PhoneList";
import { usePhones } from "../hooks/usePhones";
import { motion, AnimatePresence } from "framer-motion";

// 🎯 Animaciones externas
import { pageTransition } from "@/animations/pageTransitions";
import { fadeInPage, fadeInUp } from "@/animations/fadeVariants";

const PhonesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { phones, loading } = usePhones(searchQuery);

  const handleSearch = useCallback((query) => {
    setSearchQuery(query);
  }, []);

  return (
    <motion.div
      className="phones--page"
      {...fadeInPage} // 📦 animación externa para entrada de página
    >
      <PhoneFilter onSearch={handleSearch} totalResults={phones.length} />

      <AnimatePresence mode="wait">
        {!loading && phones.length > 0 && (
          <motion.div key="phone-list" {...fadeInUp}>
            <PhoneList phones={phones} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default PhonesPage;
