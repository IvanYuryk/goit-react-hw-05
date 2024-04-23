import { useState } from "react";
import css from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleChange = (evt) => {
    setQuery(evt.target.value.toLowerCase());
  };

  const handleSubmitForm = (evt) => {
    evt.preventDefault();
    onSubmit(query);
  };

  return (
    <form className={css.formSearch} onSubmit={handleSubmitForm}>
      <input
        className={css.inputSearch}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movie"
        onChange={handleChange}
        value={query}
      />
      <button className={css.btnSearch} type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
