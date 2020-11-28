import React from "react";

function Detail(props){
  return(
    <div>
      <p>{props.email_id}</p>
      <p>{props.phone_no}</p>
    </div>
    );
}

export default Detail;