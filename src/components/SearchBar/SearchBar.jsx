import toast from 'react-hot-toast';
import css from './SearchBar.module.css';
import { useState } from "react";

export const SearchBar = ({ onSearch }) => {

  const [search, setSearch] = useState("");
  
  const handleSubmit = e => {
    e.preventDefault();

    if (e.target.elements.query.value.trim() === '') {
      toast.error('Введіть слово для пошуку!');
     return;
    }

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
            placeholder="Пошук картинок та фото"
            className={css.barInput}
            value={search}
            onChange={({ target: { value } }) => setSearch(value)}
            />
            <button type="submit" className={css.searchBut}>Пошук</button>
        </form>
        </header>
  );
};