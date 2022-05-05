import React from "react";

export default function Phonetic(props) {
  console.log(props.phonetic);
  if (props.phonetic.audio) {
    return (
      <div className="Phonetic">
        {props.phonetic.text}{" "}
        <a href={props.phonetic.audio} target="_blank">
          Listen
        </a>
      </div>
    );
  } else {
    return null;
  }
}
