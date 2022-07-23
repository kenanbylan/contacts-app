import React, { useState } from "react";

function List({ contacts }) {
  const [filterText, setFilterText] = useState("");

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLocaleLowerCase())
    );
  });

  console.log("filtered", filtered);

  return (
    <div
      style={{
        padding: "10px",
      }}
    >
      <input
        placeholder="Filter Contacts"
        onChange={(e) => setFilterText(e.target.value)}
      />
      <ul>
        {filtered.map((contacts, index) => {
          return (
            <div
              style={{
                marginTop: 10,
                justifyContent: "center",
              }}
            >
              <li
                style={{
                  margin: 0,
                  padding: 5,
                  listStyle: "none",
                  backgroundColor: "aqua",
                  borderRadius: "5px",
                  marginBottom: 10,
                }}
                key={index}
              >
                <span>{contacts.fullName}</span>
                <br />
                <span>{contacts.phone}</span>
              </li>
            </div>
          );
        })}
      </ul>
      <p
        style={{
          margin: 0,
          padding: 5,
          listStyle: "none",
          textAlign: "left",
          fontFamily: "revert",
        }}
      >
        Total Contacts : {filtered.length}
      </p>
    </div>
  );
}

export default List;
