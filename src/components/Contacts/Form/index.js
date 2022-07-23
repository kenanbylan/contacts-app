import React, { useState, useEffect } from "react";

const initialContacts = {
  fullName: "",
  phone: "",
};

function Form({ contacts, setContacts }) {
  const [form, setForm] = useState(initialContacts);

  const onChangeInput = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    setForm(initialContacts);
  }, [contacts]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (form.fullName === "" || form.phone === "") {
      return false;
    }
    setContacts([...contacts, form]);
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          name="fullName"
          placeholder="Full Name"
          value={form.fullName}
          onChange={onChangeInput}
        />
      </div>
      <div>
        <input
          name="phone"
          value={form.phone}
          placeholder="Phone Number"
          onChange={onChangeInput}
        />
      </div>
      <div className="btn">
        <button>Add</button>
      </div>
    </form>
  );
}

export default Form;
