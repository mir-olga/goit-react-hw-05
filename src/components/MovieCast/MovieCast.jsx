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
              
              //console.log("response",response);
                }
          catch (error) {
            console.log("Error");
          }
      }
      
          fetchMovieCredits();
      }, [movieId]);

     // console.log("movieCredits",movieCredits);

    return (
        <div>

            <ul className={css.listActorName}>
                {movieCredits.map(movieCredit => (
                    <li key={movieCredit.id} className={css.liActorName}>
                        <img src={`https://image.tmdb.org/t/p/w500/${movieCredit.profile_path}`} alt="movie cast" width="100px"/>
                        <h4 className={css.name}>{movieCredit.name}</h4>
                        <p className={css.actorName}>Character: {movieCredit.character}</p>
                     </li>
                ))}
            </ul>
            {movieCredits.length == 0 && <p>We don`t have any credits for this movie</p>}
         </div>
  )};