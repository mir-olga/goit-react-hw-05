import { getSearchMovies } from '../../api';
import { useEffect, useState } from 'react';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { MovieList } from '../../components/MovieList/MovieList';


export default function MovieDetailsPage() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);

  const searchMovie = (query) => {
    setQuery(query);
    setMovies([]);
  };

  useEffect(() => {
    
    if (query === '') {
      return;
    }

    async function fetchGetSearchMovies(query) {
        try {
            const response = await getSearchMovies(query);
            setMovies(response.results);
            //console.log(response.results);
        }
        catch (error) {
          setError(true);
          //console.log("Ошибка");
        }
    }

    fetchGetSearchMovies(query);
  }, [query]);


    return (
    <div>
      <SearchBar onSearch={searchMovie}/>
      {error && <p>OOOOPS! ERROR!</p>}
      {movies.length > 0 && <MovieList movies={movies}/>}
      
      
    </div>
    )
  }