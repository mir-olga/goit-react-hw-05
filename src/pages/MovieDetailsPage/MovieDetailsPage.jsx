import { getMovieDetails } from '../../api';
import { useEffect, useState } from 'react';
import { useParams} from 'react-router-dom';
import { Link, Outlet  } from 'react-router-dom';
import moment from 'moment';
import css from './MovieDetailsPage.module.css';

export default function MoviesPage() {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState([]);
  const [genreNames, setGenreNames] = useState([]);

  useEffect(() => {
    async function fetchMovieData() {
      try {
        const response = await getMovieDetails(movieId);
        setMovieData(response);
        setGenreNames(response.genres.map(genre => genre.name).join(', '));
        //console.log(response);
      }
      catch (error) {
      //console.log("Ошибка");
         }
    }

    fetchMovieData();
  }, [movieId]);
   
    return (
      <div>
          <div className={css.description}>
              <div className={css.poster}>
                  <img src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`} className={css.posterImg} alt="Movie Poster" />
              </div>
              <div className={css.textDescription}>
                  <h1 className={css.title}>{movieData.title} ({moment(movieData.release_date).format('YYYY')})</h1>
                  <p className={css.data}>User Score: {Math.round(10*movieData.vote_average)}%</p>
                  <h2 className={css.titleSecond}>Overview</h2>
                  <p className={css.data}>{movieData.overview}</p>
                  <h2 className={css.titleSecond}>Genres</h2>
                  <p className={css.data}>{genreNames}</p>
              </div>
          </div>
              <div className={css.info}>
                  <h3>Additional information</h3>
                  <ul>
                    <li>
                        <Link to="cast">Cast</Link> 
                    </li>
                    <li>
                        <Link to="reviews">Reviews</Link> 
                    </li>
                  </ul>
              </div>
              <Outlet />
          </div>
  )}

