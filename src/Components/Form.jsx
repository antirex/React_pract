import React from "react";
import Input from "./Input";

function Form(props){
  return(
    <div>
      <h1>
      {props.choice === true ? "Hey there :)" : "Get on board with us!"}
      </h1>
      <form className="form">
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        {!props.choice && <Input type="password" placeholder="Confirm Password" />}
        <button type="submit">
          {props.choice === true ? "Login" : "Register"}
        </button>
      </form>
    </div>    
  )
}

export default Form ;