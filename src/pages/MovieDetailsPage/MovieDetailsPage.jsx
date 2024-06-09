import { getMovieDetails } from '../../api';
import { useEffect, useRef, useState, Suspense } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import moment from 'moment';
import {BackLink} from '../../components/BackLink/BackLink'
import css from './MovieDetailsPage.module.css';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState([]);
  const [genreNames, setGenreNames] = useState([]);
  const location = useLocation();
  const backLinkHref = useRef(location.state);

  useEffect(() => {
    async function fetchMovieData() {
      try {
        const response = await getMovieDetails(movieId);
        setMovieData(response);
        setGenreNames(response.genres.map(genre => genre.name).join(', '));
      }
      catch (error) {}
    }

    fetchMovieData();
  }, [movieId]);

  const defaultImg = 'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';

    return (
      <div>
        <BackLink href={backLinkHref.current ?? "/movies"}></BackLink>
          <div className={css.description}>
              <div className={css.poster}>
                  
                  {movieData.poster_path ? (<img src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`} className={css.posterImg} alt="Movie Poster" />) 
                  : (<img src={defaultImg} className={css.posterImg} alt="Movie Poster" />) }

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
              <Suspense fallback={<b>Loading subpage...</b>}>
                  <Outlet />
              </Suspense>
          </div>
  )}

