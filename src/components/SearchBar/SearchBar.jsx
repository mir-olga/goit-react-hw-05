import css from './SearchBar.module.css';

export const SearchBar = ({ onSearch }) => {

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
            />
            <button type="submit" className={css.searchBut}>Search movie</button>
        </form>
        </header>
  );
}