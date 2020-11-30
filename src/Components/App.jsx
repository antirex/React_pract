import React from "react";
import Login from "./Login";

var isLoggedIn = false;

function renderConditionality() {
  if (isLoggedIn) {
    return <h1>Hello User!</h1>;
  } else {
    return <Login />;
  }
}

function App() {
  return <div className="container">{renderConditionality()}</div>;
}

export default App;
