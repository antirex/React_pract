import React from "react";
import Login from "./Login";
import Register from "./Register";

var isRegistered = true;

function App() {
  return (
    <div className="container">
      {isRegistered === true ? <Login user = "Login"/> : <Register user="Register"/>}
    </div>
  );
}

export default App;
