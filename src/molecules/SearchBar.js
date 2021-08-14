import React, { useRef } from "react";

const SearchBar = (props) => {
  const searchInput = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    const searchTerm = searchInput.current.value.split(" ").join("-");
    props.setSearchTerm(searchTerm);
  };
  return (
    <form onSubmit={submitHandler}>
      <label>
        search
        <input ref={searchInput} type="text" />
      </label>
    </form>
  );
};

export default SearchBar;
