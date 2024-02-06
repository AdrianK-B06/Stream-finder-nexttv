import React, { useState } from "react";
import { autocompleteSearch, AutocompleteResponse } from "./watchmodeService";
import Button from "../button/Button";

const AutocompleteSearch: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<AutocompleteResponse["results"]>([]);

  const handleSearch = async () => {
    if (query.length > 2) {
      try {
        const data = await autocompleteSearch(query);
        setResults(data.results);
      } catch (error) {
        console.error("Error fetching autocomplete results:", error);
      }
    }
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <Button onClick={handleSearch} />
      <ul>
        {results.map((result, index) => (
          <li key={index}>{result.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default AutocompleteSearch;
