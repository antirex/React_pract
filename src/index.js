import React from "react";
import ReactDOM from "react-dom";

const name = "Anshul";
const surname = "Bamb";
const num = "2";

ReactDOM.render(
<div>
  <h1>First react App made by {name + " " +surname}</h1>
  <h4>First react App made by {name} {surname}</h4>
  <p>my lucky number is {num}</p>
  {/* {values or expressions are permitted but not statements like if-else } */}
</div>, 
document.getElementById("root")
);
