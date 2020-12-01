import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";
import App from "../src/Components/App";
// import emojipedia from "./emojipedia";
// // import App from "./App";

// ReactDOM.render(<App />, document.getElementById("root"));

// destructuring arrays and objects
const [honda, tesla] = cars; //DS_array
const {
  coloursByPopularity: [hondaTopColour],
  speedStats: { topSpeed: hondaTopSpeed = "0" }
} = honda; //DS_object
// const {speedStats:{topSpeed :hondaTopSpeed = "0"}} = honda;
const {
  coloursByPopularity: [teslaTopColour],
  speedStats: { topSpeed: teslaTopSpeed = "60" }
} = tesla;
// const {speedStats:{topSpeed :teslaTopSpeed = "60"}} = tesla;

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
