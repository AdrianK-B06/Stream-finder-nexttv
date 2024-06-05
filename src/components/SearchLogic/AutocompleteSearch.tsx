import React, { useState } from "react";
import { autocompleteSearch, AutocompleteResponse } from "./watchmodeService";
import Button from "../button/Button";
import SearchResult from "../searchResults/SearchResult";
import style from "../searchBar/searchBar.module.css";

const AutocompleteSearch: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<AutocompleteResponse["results"]>([]);

  const handleSearch = async () => {
    if (query.length > 2) {
      try {
        const data = await autocompleteSearch(query);
        console.log("API Data:", data);
        setResults(data.results);
      } catch (error) {
        console.error("Error fetching autocomplete results:", error);
      }
    }
  };

  return (
    <div>
      <input
        className={style.searchInput}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <Button onClick={handleSearch} />

      <SearchResult results={results} />
    </div>
  );
};

export default AutocompleteSearch;
