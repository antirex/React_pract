import React from "react";
// pascal case -- for functions in react
function Heading(){
  return <div>
      <h1> Custom Heading </h1>
      <h4>sub Heading</h4>
    </div>;
}
function add(x,y){
  return (x+y);
}
function mul(x,y){
  return (x*y);
}
function sub(x,y){
  return (x-y);
}
function div(x,y){
  return (x/y);
}

export default Heading;
export {add, mul,sub, div};