import React from "react";
import Button from "./button";
function Card(props) {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm">
      <a href="#">
        <img className="rounded-t-lg" src={props.image} alt="" />
      </a>
      <div className="p-5 text-center">
        <h3 className="mb-3 text-gray-700">{props.description}</h3>
        <Button name="wow" link="https://transform.tools/html-to-jsx"></Button>
      </div>
    </div>
  );
}

export default Card;
