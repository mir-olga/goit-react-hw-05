import css from './SearchBar.module.css';
//import { useState } from "react";


export const SearchBar = ({ onSearch }) => {

  //const [search, setSearch] = useState("");
  
  const handleSubmit = e => {
    e.preventDefault();

    onSearch(e.target.elements.query.value);

    e.target.reset();
  };

  return (
        <header className={css.header}>
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder=""
            className={css.barInput}
            //value={search}
            //onChange={({ valueParam }) => setSearch(valueParam)}
            />
            <button type="submit" className={css.searchBut}>Search movie</button>
        </form>
        </header>
  );
}