import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data[0]);
  }

  function handleSearch(event) {
    event.preventDefault();
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleWordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form className="form " onSubmit={handleSearch}>
        <div className="form-control rounded">
          <input
            type="search"
            placeholder="happy word hunting..."
            onChange={handleWordChange}
          />
        </div>
      </form>
      <h1>{keyword}</h1>
    </div>
  );
}
