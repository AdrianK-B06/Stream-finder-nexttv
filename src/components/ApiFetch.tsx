import { useEffect, useState } from "react";
// import fetch from "node-fetch";

interface MyApiProps {
  searchTerm: string;
}

const MyApi: React.FC<MyApiProps> = ({ searchTerm }) => {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://api.watchmode.com/v1/title/${searchTerm}/details/?apiKey=unwb8JLwwmPPn4n85XoWSfONMETX2o6pUvNleq0L`;
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

    fetchData();
  }, [searchTerm]); // Run the effect whenever the searchTerm changes

  return (
    <div>
      {apiData && (
        <div>
          <h2>API Results</h2>
          {/* Render the API results here */}
          <pre>{JSON.stringify(apiData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default MyApi;
