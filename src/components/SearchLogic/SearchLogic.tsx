import { useState } from "react";

function SearchLogic({ render }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://api.watchmode.com/api/v1/search/?apiKey=${process.env.REACT_APP_WATCHMODE_API_KEY}&search_field=name&search_value=${query}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setResults(data.title_results || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // The render prop is used to render the UI part
  return render({ query, setQuery, handleSearch, results, loading, error });
}

export default SearchLogic;
