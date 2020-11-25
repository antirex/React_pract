import React from "react";
import {add,sub,mul,div} from "./Heading";
function List(){
  return <ul>
    <li>{add(9,1)}</li>
    <li>{sub(100,10)}</li>
    <li>{mul(25,3)}</li>
    <li>{div(100,10)}</li>
  </ul>
}

export default List;