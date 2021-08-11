import React, {useState, useEffect} from 'react';

import './App.css';
import SearchBar from './molecules/SearchBar';
function App() {
  const [serachTerm, setSearchTerm] = useState("");
  useEffect(()=>{
    if(serachTerm !== ""){
      console.log(`szukaj ${serachTerm}`)
    }
  },[serachTerm])
  return (
    <div className="App">
      Hello
      <SearchBar setSearchTerm={setSearchTerm}/>
    
    </div>
  );
}

export default App;
