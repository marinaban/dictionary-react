import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  console.log(props);
  if (props.synonyms.length > 0) {
    return (
      <ul className="synonyms">
        {props.synonyms.map((synonyms, index) => {
          return <li key={index}>{synonyms}</li>;
        })}
      </ul>
    );
  } else {
    return null;
  }
}
