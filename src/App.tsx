import "./App.css";
import MyApi from "./components/ApiFetch";
import React, { useState } from "react";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [triggerFetch, setTriggerFetch] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    setTriggerFetch((prev) => !prev);
  };

  return (
    <div>
      <main>
        <h1>
          <span className="find">Find</span> <span className="your">your</span>
          <br />
          <span className="tv">next Tv</span>
          <br />
          <span className="adventure">Adventure</span>
        </h1>
        <input
          name="name"
          type="text"
          placeholder="Search your heart out..."
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button onClick={handleSearch}>Search!</button>
      </main>
      <div>
        <MyApi searchTerm={searchTerm} triggerFetch={triggerFetch} />
      </div>
      <footer>
        <p>“Streaming data powered by Watchmode.com"</p>
      </footer>
    </div>
  );
}
