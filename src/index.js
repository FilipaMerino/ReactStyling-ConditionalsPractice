//Create a React app from scratch.
import React from "react";
import ReactDOM from "react-dom";

const current = new Date();
const currentTime = current.toLocaleTimeString("UTC");

const customStyle = {
  color: "red",
};

let greeting;
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//Dynamically change the color of the h1 using inline css styles.

if (currentTime < 12) {
  greeting = "Good morning!";
  customStyle.color = "#B3C890";
}
if ((currentTime) => 12 && currentTime < 6) {
  greeting = "Good Afternoon!";
  customStyle.color = "#1B9C85";
  //or "Good evening" if between 6PM and midnight.
} else {
  greeting = "Good Night!";
  customStyle.color = "#FEA1A1";
}

ReactDOM.render(
  //Apply the "heading" style in the styles.css
  <div>
    <h1 style={customStyle}>{greeting}</h1>
  </div>,
  document.getElementById("root")
);

//Morning = #B3C890, Afternoon = #1B9C85, Night = #FEA1A1.
