import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

function createCard(contact) {
  return (
    <Card
      key={contact.id}
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">Tony's Contacts</h1>
      <Avatar img="https://store-images.s-microsoft.com/image/apps.18781.13510798882877150.0ecd2c4a-c209-480b-be55-924db715a15b.fcf30909-a6d2-4979-9703-cab089e1a4be?mode=scale&q=90&h=300&w=300" />
      {contacts.map(createCard)}
      {/* <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      /> */}
    </div>
  );
}

export default App;
