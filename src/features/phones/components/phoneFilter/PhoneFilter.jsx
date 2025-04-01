import { usePhoneFilter } from "@/features/phones/hooks/usePhoneFilter";
import "./PhoneFilter.scss";
import { motion, AnimatePresence } from "framer-motion";
import { useRef } from "react";

export const PhoneFilter = ({ onSearch, totalResults }) => {
  const { query, setQuery, debouncedQuery } = usePhoneFilter(onSearch); // 👈 asegúrate de exponer debouncedQuery
  const lastManualSearch = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = query.trim();

    // ✅ Si ya se buscó automáticamente ese valor, no lo envíes de nuevo
    const isAlreadySearched = trimmed === debouncedQuery;

    if (trimmed.length >= 3 && !isAlreadySearched) {
      lastManualSearch.current = trimmed;
      onSearch(trimmed); // 🔥 Ejecuta búsqueda solo si no se ha hecho antes
    }
  };

  return (
    <form className="phone-filter" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search for a smartphone..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-input"
      />
      {totalResults > 0 && (
        <span className="results-count">
          <AnimatePresence mode="wait">
            <motion.span
              key={totalResults}
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              transition={{ duration: 0.3 }}
              style={{ display: "inline-block", marginRight: "4px" }}
            >
              {totalResults}
            </motion.span>
          </AnimatePresence>
          RESULTS
        </span>
      )}
    </form>
  );
};
