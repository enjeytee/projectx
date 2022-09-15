import React from "react";

const SearchBar = () => {
    return (
        <div className="container-search">
            <input className="input-search" type="text" placeholder="Enter DR Number"/>
            <button className="button-search">Search Transaction</button>
        </div>
    );
};
export default SearchBar;