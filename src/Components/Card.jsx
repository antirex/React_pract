import React from "react";
import Avatar from "./Avatar";
import Detail from "./Detail";

function Card(props){
  return(
  <div>
    <div>
      <p>{props.id}</p>
      <h2>{props.name}</h2>
    </div>
    <Avatar img={props.img_src}/>
    <Detail email_id={props.email}/>
    <Detail phone_no={props.phone}/>
  </div>
  );
}

export default Card;