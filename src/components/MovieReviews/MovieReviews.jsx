import { getMovieReviews } from '../../api';
import { useEffect, useState } from 'react';
import { useParams} from 'react-router-dom';
import css from './MovieReviews.module.css';

export const MovieReviews = () => {

    const { movieId } = useParams();
    const [movieReviews, setMovieReviews] = useState([]);

    useEffect(() => {
        async function fetchMovieReviews() {
          try {
              const response = await getMovieReviews(movieId);
              setMovieReviews(response.results);
              
              console.log("MovieReviews",response);
                }
          catch (error) {
            console.log("Error");
          }
      }
      
          fetchMovieReviews();
      }, [movieId]);


    return (
        <div>
            
            <ul>
                {movieReviews.map(movieReview => (
                    <li key={movieReview.id} className={css.ListActorName}>
                        <h4 className={css.name}>Autor: {movieReview.author}</h4>
                        <p className={css.actorName}>{movieReview.content}</p>
                     </li>
                ))}
            </ul>
            {movieReviews.length == 0 && <p>We don`t have any reviews for this movie</p>}
        </div>
    )

  };