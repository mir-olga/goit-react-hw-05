import { getTrendingMovies } from '../../api';
import { useEffect, useState } from 'react';
import { MovieList } from '../../components/MovieList/MovieList';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
      const controller = new AbortController(); 

      async function fetchTrendingMovieList() {
          try {
              
              const response = await getTrendingMovies({abortController: controller,});
              setMovies(response.results);
              console.log(response);
          }
          catch (error) {
              if (error.code !== 'ERR_CANCELED') {
                  setError(true);
              }
          }
      }
  
      fetchTrendingMovieList();

      return () => {
          controller.abort(); //при розмонтування запит відміняється
        };
    }, []);


  return (
    <div>
      <h1>Trending today</h1>
      {error && <p>OOOOPS! ERROR!</p>}
      <MovieList movies={movies}/>
    </div>
  );
}
