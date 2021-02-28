import React from "react";
import { Fade } from "react-bootstrap";
import { FaGitSquare, FaDesktop } from "react-icons/fa";

function Card(props) {
  return (
    <div className={`grid-item gallery__item--${props.id}`}>
      <img src={props.image} alt={props.name} className="gallery__img" />
      <div className="desc">
        <p>{props.name}</p>
      </div>

      <div className="dep-links">
        <a href={props.github} target="_blank">
          <FaGitSquare />
        </a>
        <a href={props.deploy} target="_blank">
          <FaDesktop />
        </a>
      </div>
    </div>
  );
}

export default Card;
