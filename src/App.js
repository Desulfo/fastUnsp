import React, { useState, useEffect } from "react";

import Results from "./molecules/Results";
import SearchBar from "./molecules/SearchBar";
import "./App.css";

const searchAPI = (term, imgPerPage = 24) =>
  `https://api.unsplash.com/search/photos?per_page=${imgPerPage}&query=${term}`;
const unsplashClientID =
  "1ff567feea79565eafd82a37c3e34e5dacdbb411a117a9bec0bc20ffbd1a8612";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState(null);

  useEffect(() => {
    if (searchTerm !== "") {
      fetch(searchAPI(searchTerm), {
        method: "GET",
        headers: {
          Authorization: `Client-ID ${unsplashClientID}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setResults(data.results);
        });
    }
  }, [searchTerm]);

  return (
    <div className="App">
      <SearchBar setSearchTerm={setSearchTerm} />
      {results && <Results results={results} />}
    </div>
  );
}

export default App;
