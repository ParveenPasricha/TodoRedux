//Simple Project Copy Paste and understanding of Debouncing 


import React, { useState, useEffect } from "react";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState(query);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500); // 500ms delay

    return () => clearTimeout(timer); // Cleanup on unmount or query change
  }, [query]);

  useEffect(() => {
    if (debouncedQuery) {
      console.log("Fetching results for:", debouncedQuery);
      // Call API with debouncedQuery
    }
  }, [debouncedQuery]);

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchBar;
