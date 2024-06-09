import { getSearchMovies } from '../../api';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchBar }  from '../../components/SearchBar/SearchBar';
import { MovieList }  from '../../components/MovieList/MovieList';

export default function MoviesPage() {
  //const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);

  const [params, setParams] = useSearchParams();
  const searchValue = params.get('searchValue') ?? '';

  const searchMovie = (query) => {
    //setQuery(query);
    //setMovies([]);
    setParams({searchValue:query});
   // changeSearchValue;
  };

  

  useEffect(() => {
    
    if (searchValue === '') {
      return;
    }

    async function fetchGetSearchMovies() {
        try {
            const response = await getSearchMovies(searchValue);
            setMovies(response.results);
        }
        catch (error) {
          setError(true);
        }
    }

    fetchGetSearchMovies();
  }, [searchValue]);


//console.log("params",params);

    return (
    <div>
      <SearchBar  onSearch={searchMovie}/>
      {error && <p>OOOOPS! ERROR!</p>}
      {movies.length > 0 && <MovieList movies={movies}/>}
    </div>
    )
  }