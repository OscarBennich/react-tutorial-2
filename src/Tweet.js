import React from "react";
import './App.css'

export default function Tweet({name, message, numberOfLikes}) {
  return (
    <div className="tweet">
      <h3> {name} </h3>
      <p> {message} </p>
      <h3>Number of likes: {numberOfLikes}</h3>
    </div>
  );
}
