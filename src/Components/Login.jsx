import React from "react";
import Input from "./Input";
function Login() {
  return (
    <div>
      <h1>Hey there :)</h1>
      <form className="form">
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
