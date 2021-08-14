import React, { useRef } from "react";

const SearchBar = (props) => {
  const searchInput = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    props.setSearchTerm(searchInput.current.value);
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
