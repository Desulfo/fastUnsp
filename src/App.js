import React, {useState, useEffect} from 'react';

import './App.css';
import Results from './molecules/Results';
import SearchBar from './molecules/SearchBar';


const searchAPI = (term) => `https://api.unsplash.com/search/photos?per_page=24&query=${term}`;
function App() {
  const [serachTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState(null);

  useEffect(()=>{
    if(serachTerm !== ""){

    fetch(searchAPI(serachTerm), {
      method: "GET",
      headers: {
        "Authorization": "Client-ID 1ff567feea79565eafd82a37c3e34e5dacdbb411a117a9bec0bc20ffbd1a8612"
          }
        })
    .then(response=>response.json())
    .then(data => { console.log(data)
      console.log(`szukaj ${serachTerm}`)
      setResults(data.results)
    })
    }
  },[serachTerm])
  

  return (
    <div className="App">
      <SearchBar setSearchTerm={setSearchTerm}/>
      {results && <Results results={results}/>}
    
    </div>
  );
}

export default App;
