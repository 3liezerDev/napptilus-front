import { usePhoneFilter } from "../../hooks/usePhoneFilter"; // ✅ Usamos el hook
import "./PhoneFilter.scss";

export const PhoneFilter = ({ onSearch, totalResults }) => {
  const { query, setQuery } = usePhoneFilter(onSearch); // ✅ Extraemos lógica

  return (
    <form className="phone-filter">
      <input
        type="text"
        placeholder="Search for a smartphone..."
        value={query}
        onChange={(e) => setQuery(e.target.value)} // ✅ Controlado + debounce
        className="search-input"
      />
      <span className="results-count">{totalResults} RESULTS</span>
    </form>
  );
};
