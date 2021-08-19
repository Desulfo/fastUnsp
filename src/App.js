import React, { useState, useEffect } from "react";
import axios from "axios";

import Results from "./molecules/Results";
import SearchBar from "./molecules/SearchBar";
import styles from "./App.module.css";

const searchAPI = (term, imgPerPage = 24) =>
  `https://api.unsplash.com/search/photos?per_page=${imgPerPage}&query=${term}`;
const unsplashClientID =
  "1ff567feea79565eafd82a37c3e34e5dacdbb411a117a9bec0bc20ffbd1a8612";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (searchTerm !== "") {
      setResults(null);
      axios({
        url: searchAPI(searchTerm),
        method: "GET",
        headers: {
          Authorization: `Client-ID ${unsplashClientID}`,
        },
      })
        .then((response) => {
          if (response.data.results.length < 1) {
            setError(true);
            return;
          }
          setError(null);
          setResults(response.data.results);
        })
        .catch((error) => {
          console.error(error);
          setError(true);
        });
    }
  }, [searchTerm]);

  return (
    <div className={styles.App}>
      <SearchBar setSearchTerm={setSearchTerm} />
      {error && (
        <p className={styles.error}>Something went wrong. Check out console!</p>
      )}
      {results && <Results results={results} />}
    </div>
  );
}

export default App;
