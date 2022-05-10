import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Result from "./Result";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [result, setResult] = useState(null);

  function handleResponse(response) {
    setResult(response.data[0]);
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
      <header className="title"> Dictionary</header>
      <section>
        <form className="form" onSubmit={handleSearch}>
          <input
            type="search"
            placeholder="happy word hunt..."
            onChange={handleWordChange}
          />
        </form>
        <div className="hint">
          suggested words: strong, jump, quiet, sunset...
        </div>
      </section>

      <Result result={result} />
    </div>
  );
}
