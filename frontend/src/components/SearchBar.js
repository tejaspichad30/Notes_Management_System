import React, { useState } from "react";
import axios from "axios";

function SearchBar({ setNotes }) {
  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    try {
      const res = await axios.get(
        `https://notes-backend-agm0.onrender.com/api/notes/search?q=${query}`
      );
      setNotes(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search notes..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <button onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;