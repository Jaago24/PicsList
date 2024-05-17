import React, { useState } from "react";

function SearchBar({ onSubmit }) {
  const [search, setSearch] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(search);
  };
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="SearchBar">
      <input type="text" value={search} onChange={handleChange} />
      <button onClick={handleSubmit}>Search</button>
    </div>
  );
}

export default SearchBar;
