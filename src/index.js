import React from "react";
import ReactDOM from "react-dom";
// import App from "./App";
import emojipedia from "./emojipedia";
// import App from "./App";

// ReactDOM.render(<App/>,document.getElementById("root"));
const numbers = [10, 4, 56, 78, 23, 45, 6];

const newNumbers = numbers.filter((num) => num > 20); //filter
console.log(newNumbers);

const add = numbers.reduce((accum, num) => {
  console.log("Accum: " + accum);
  console.log("Num: " + num);
  return accum + num;
}); //reduce
console.log(add);

//map/reduce/filter
var desc = emojipedia.map((descrip) => descrip.meaning.substring(0, 100)); //map

console.log(desc);
