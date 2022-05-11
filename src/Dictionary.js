import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Result from "./Result";
import Photos from "./Photos";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [result, setResult] = useState(null);
  const [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResult(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }
  function handleSearch(event) {
    event.preventDefault();
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    const pexelsApiKey =
      "563492ad6f9170000100000112eadf7cf9a74a11a4251bc227604d89";
    const apiUrlPexels = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    const headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(apiUrlPexels, { headers }).then(handlePexelsResponse);
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
      <Photos photos={photos} />
    </div>
  );
}
