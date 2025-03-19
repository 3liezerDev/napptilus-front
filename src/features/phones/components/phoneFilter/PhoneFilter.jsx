import { useState } from 'react';
import './PhoneFilter.scss';

export const PhoneFilter = ({ onSearch, totalResults }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <div className="phone-filter">
      <input
        type="text"
        placeholder="Search for a smartphone..."
        value={query}
        onChange={handleSearch}
        className="search-input"
      />
      <span className="results-count">{totalResults} RESULTS</span>
    </div>
  );
};
