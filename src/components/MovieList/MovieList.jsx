import { getTrendingMovies } from '../../api';
import { useEffect, useState } from 'react';


export const MovieList = () => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        const controller = new AbortController(); 

        async function fetchTrendingMovieList() {
            try {
                
                const response = await getTrendingMovies({abortController: controller,});
                setMovies(response.results);// => [...prevMovies, ...response.results]);
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
    <p>MovieList </p>
     <ul> 
        {movies.map(({ id, title}) => (
        <li  key={id}>
            <a>Назва фільму {id} - {title}</a>
        </li>
))}
    </ul> 
    {error && <p>OOOOPS! ERROR!</p>}
  </div>)
  };