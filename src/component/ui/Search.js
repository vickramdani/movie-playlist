import React, { useState } from "react";

const Search = ({ getQuery }) => {
  const [text, setText] = useState("");

  const getSearch = e => {
    e.preventDefault();
    getQuery(text);
    setText("");
  };

  const onChanges = q => {
    setText(q);
  };

  return (
    <section className="search">
      <form onSubmit={getSearch}>
        <input
          type="text"
          className="form-control"
          placeholder="Ex: Batman"
          value={text}
          onChange={e => onChanges(e.target.value)}
        />
      </form>
    </section>
  );
};

export default Search;
