import React from "react";
import Input from "./Input";
function Register(props){
  return(
    <div>
      <h1>Get onboard with us!</h1>
      <form className="form">
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        <Input type="password" placeholder="Confirm Password" />
        <button type="submit">{props.user}</button>
      </form>
    </div>
  );
}
export default Register;