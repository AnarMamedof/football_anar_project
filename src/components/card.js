import React from "react";

export default function Card(props) {
  return (
    <div className="card grid-item">
      <h2>{props.name}</h2>
      <img className="profile-pic" src={props.src} alt="avatar_img" />
      <p>City: {props.city}</p>
      <p>Stadium: {props.stadium}</p>
      <a className="btn" href={props.link}>
        See news
      </a>
    </div>
  );
}
