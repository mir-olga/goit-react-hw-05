import { getMovieCredits } from '../../api';
import { useEffect, useState } from 'react';
import { useParams} from 'react-router-dom';
import css from './MovieCast.module.css';

export const MovieCast = () => {
    const { movieId } = useParams();
    const [movieCredits, setMovieCredits] = useState([]);

    useEffect(() => {
        async function fetchMovieCredits() {
          try {
              const response = await getMovieCredits(movieId);
              setMovieCredits(response.cast);
                }
          catch (error) {}
      }
      
          fetchMovieCredits();
      }, [movieId]);

      const defaultImg = 'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';

    return (
        <div>

            <ul className={css.listActorName}>
                {movieCredits.map(movieCredit => (
                    <li key={movieCredit.id} className={css.liActorName}>
                         {movieCredit.profile_path ? (<img src={`https://image.tmdb.org/t/p/w500/${movieCredit.profile_path}`} alt="movie cast" width="100px"/>) 
                                                   : (<img src={defaultImg} className={css.posterImg} alt="Movie Poster" width="100px" height="150px"/>) }

                        <h4 className={css.name}>{movieCredit.name}</h4>
                        <p className={css.actorName}>Character: {movieCredit.character}</p>
                     </li>
                ))}
            </ul>
            {movieCredits.length == 0 && <p>We don`t have any credits for this movie</p>}
         </div>
  )};