import React, {useRef} from "react";

const SearchBar = (props) => {
    const searchInput = useRef()
    const sbumitHandler = (e) => {
        e.preventDefault();
        props.setSearchTerm(searchInput.current.value);

    }
    return (
        <form onSubmit={sbumitHandler}>
            <label>search
                <input ref={searchInput} type="text"/>
            </label>
        </form>
    )
}

export default SearchBar;