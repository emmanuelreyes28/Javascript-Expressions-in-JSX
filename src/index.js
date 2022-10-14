import React from "react";
import ReactDOM from "react-dom";

const fName = "Emmanuel";
const lName = "Reyes";
const number = 8;

ReactDOM.render(
  <div>
    <h1>Hello {fName + " " + lName}!</h1>
    <p>Your lucky number is {number}</p>
  </div>,
  document.getElementById("root")
);
