import { useEffect, useState } from "react";

interface MyApiProps {
  searchTerm: string;
  triggerFetch: boolean;
}

const MyApi: React.FC<MyApiProps> = ({ searchTerm, triggerFetch }) => {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = process.env.REACT_APP_WATCHMODE_API_KEY;
        const url = `https://api.watchmode.com/v1/title/${encodeURIComponent(
          searchTerm
        )}/details/?apiKey=${apiKey}`;

        console.log("Request URL:", url);

        const response = await fetch(url, { method: "GET" });

        console.log("Response status:", response.status);

        if (!response.ok) {
          console.error("Error response:", await response.text());
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setApiData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (searchTerm) {
      fetchData();
    }
  }, [searchTerm, triggerFetch]);

  return (
    <div>
      {apiData && (
        <div>
          <h2>API Results</h2>
          <pre>{JSON.stringify(apiData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default MyApi;
