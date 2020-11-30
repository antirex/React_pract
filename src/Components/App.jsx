import React from "react";
import Form from "./Form";

var isRegistered = false;

function App() {
  return (
    <div className="container">
      <Form choice={isRegistered}/>
    </div>
  );
}

export default App;
