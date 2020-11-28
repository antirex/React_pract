import React from "react";
import Heading from "./Heading";
import Card from "./Card";
import contacts from "./contacts";
import Avatar from "./Avatar";

function App() {
  return (
    <div>
      <Heading />
      <Avatar img="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASoAAACpCAMAAACrt4DfAAAAdVBMVEURERH///8AAAAODg4LCwsGBgbU1NTw8PCioqLr6+vj4+P6+voICAhJSUmnp6dFRUW0tLSSkpJSUlKCgoI2NjbDw8NxcXHY2NjPz89ra2sXFxd5eXkiIiL19fU9PT29vb1fX18nJyd/f3+Li4tcXFyQkJAvLy/l3P87AAACiklEQVR4nO3ZiZKqMBCFYdKAgCgK7svVcX3/R7wE3BBch6qh4P8eIGVOpTtNNAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaBir/CU7nfLXrADplpuVKSJRNC91zWoQ1zBLW0zHZAzWQWSXtmR1iBtKOSvpmKyfwPPdpdQyqa2SMg6VHefUDVtKTRZxYCUsWDkSqeDXh0ofp+Fg5Cil1j0pJfnqkY2vhr8qFh2TjPteHJNywrmUVMyVY4qn2t9vztRVt3fbKjEZ17TyEjJSX9dfJ46pF079NKek8sr9cZUiu3iP4y92qKvuuF07p5iUV+PKS0hPb3P1aavSzWnWb6uL1qzOlafpRhVbfrDLpDlF7kTd6K/qeuddSaB36s/fjcrSI8Hu0pxUeudJvSsvkZafUpt3okqa02LtqYzWuP4HSpNTGXVfnoqkOQVtdadf7zvvSn5OO37+BdhJv1f8+5yc0GpIUHFU51PyeATVzem4G+ViiqfN2t95Ny6HSqlFUVa6OS1P3yuNrbyUTK9bH95vXDenfb45JWo/bd6zlje796Ob56X0MWVaUHVa/afNHBlkS2ooZ8PB6F9xTM2YNnP0d3K2rkaB6wajSWFEp8qTWr5tvmCK8ziTh5XXuAOlWZvPgmrYnXfr/FHzFudgNDaoOKr9R5XXsDsvQ6L3cvL1nffXP/Zv2cN3gvJCo4l3XpYpD2eni2nDK+8sN1fda+S0Weh5s2rotPmArJ9WHgfq6vQfRA53Xp5tFjyyTLZUXoGOuNmcWocllVfMFOOQvkv5ztSdCbPBE/rxfLlaHZOHKs7TK5ZtW6QEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4MZ/CngV76LAlSkAAAAASUVORK5CYII=" />
      {contacts.map(contact => (
        <Card
          key={contact.id}
          id={contact.id}
          name={contact.name}
          img_src={contact.img}
          email={contact.email}
          phone={contact.phone}
        />
      ))}
    </div>
  );
}

export default App;
