import React from "react";
import "./Photos.css";

export default function Photos(props) {
  console.log(props);
  if (props.photos) {
    return (
      <section className="photos">
        <div className="row">
          {props.photos.map((photos, index) => {
            return (
              <div className="col-4" key={index}>
                <a href={photos.src.original} target="_blank" rel="noreferrer">
                  <img src={photos.src.tiny} className="img-fluid" />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
