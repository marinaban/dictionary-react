import React from "react";

export default function Synonyms(props) {
  if (props.synonyms.length > 0) {
    return (
      <div className="synonyms">
        Synonyms:
        {props.synonyms.map((synonyms, index) => {
          return <div key={index}>{synonyms}</div>;
        })}
      </div>
    );
  } else {
    return null;
  }
}
