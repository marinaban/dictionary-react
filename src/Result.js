import React from "react";
import Meaning from "./Meaning";
import "./Result.css";
import Phonetic from "./Phonetic";

export default function Result(props) {
  if (props.result) {
    return (
      <div className="Results">
        <h2 className="part-of-speech">{props.result.word}</h2>
        {props.result.phonetics.map((phonetic, index) => {
          return (
            <div key="index">
              {" "}
              <Phonetic phonetic={phonetic} />{" "}
            </div>
          );
        })}
        {props.result.meanings.map((meaning, index) => {
          return (
            <div key={index}>
              {" "}
              <Meaning meaning={meaning} />{" "}
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
