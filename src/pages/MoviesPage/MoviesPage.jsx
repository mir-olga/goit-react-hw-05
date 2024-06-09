import { getSearchMovies } from '../../api';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchBar }  from '../../components/SearchBar/SearchBar';
import { MovieList }  from '../../components/MovieList/MovieList';
import { Loader }  from '../../components/Loader/Loader';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const [params, setParams] = useSearchParams();
  const searchValue = params.get('searchValue') ?? '';

  const searchMovie = (query) => {
    setParams({searchValue:query} ?? {});
  };

  useEffect(() => {
    
    if (searchValue === '') {
      return;
    }

    async function fetchGetSearchMovies() {
      setIsLoading(true);

        try {
            const response = await getSearchMovies(searchValue);
            setMovies(response.results);
        }
        catch (error) {
          setError(true);
        }
        finally {
          setIsLoading(false);
      }
    }

    fetchGetSearchMovies();
  }, [searchValue]);

    return (
    <div>
      <SearchBar  onSearch={searchMovie}/>
      {isLoading && <Loader/>}
      {error && <p>OOOOPS! ERROR!</p>}
      {movies.length > 0 && <MovieList movies={movies}/>}
    </div>
    )
  }