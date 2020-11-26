import React from "react";
import Heading from "./Heading";
import List from "./List";
import Card from "./Card";
import contacts from "./contacts";

function App(){
return (
<div>
    <Card
    name={contacts[0].name}
    img_src ={contacts[0].img}
    email ={contacts[0].email}
    phone={contacts[0].phone}
    />
    <Card
    name={contacts[1].name}
    img_src ={contacts[1].img}
    email ={contacts[1].email}
    phone={contacts[1].phone}
    />
    <Card
    name={contacts[2].name}
    img_src ={contacts[2].img}
    email ={contacts[2].email}
    phone={contacts[2].phone}
    />
</div>
);
}

export default App;