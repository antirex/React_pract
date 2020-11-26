import React from "react";
import ReactDOM from "react-dom";
// import App from "./App";

function Card(props){
  return (
  <div>
    <h1>My Contacts</h1>
    <h2>{props.name}</h2>
    <img
      src={props.img_src}
      alt="avatar_img"
    />
    <p>{props.phone}</p>
    <p>{props.email}</p>
  </div>
  );
}

ReactDOM.render(<div>
  <Card
  name="Beyonce"
  img_src ="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
  email ="b@beyonce.com"
  phone="+123 456 789"
  />
  <Card
  name="Jack Bauer"
  img_src ="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
  email ="jack@nowhere.com"
  phone="+987 654 32"
  />
</div>,document.getElementById("root"));
