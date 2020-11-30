import React from "react";
import Login from "./Login";

var isLoggedIn = false;
const date = new Date().getHours();

// function renderConditionality() {
//   if (isLoggedIn) {
//     return <h1>Hello User!</h1>;
//   } else {
//     return <Login />;
//   }
// }

function App() {
  return (
    <div className="container">
      {isLoggedIn === true ? <h1>Hello User!</h1> : <Login />}
      {date > 10 && <p>Boombaalaaa</p>}
      {/* here we are using the react && where it checks if cond true then render p tag or else nothing  */}
    </div>
  );
}

export default App;
