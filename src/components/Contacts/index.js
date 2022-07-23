import Form from "./Form";
import List from "./List";
import React, { useState, useEffect } from "react";

import "./styles.css";

function Contacts() {
  const [contacts, setContacts] = useState([
    { fullName: "John Doe", phone: "123932" },
    { fullName: "Kenan Baylan", phone: "782923" },
    { fullName: "Marilyn Monson", phone: "298102" },
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <div id="container">
      <h1>Contacts Application</h1>
      <List contacts={contacts} />
      <Form setContacts={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
