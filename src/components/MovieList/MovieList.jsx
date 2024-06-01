import { Link } from 'react-router-dom';

export const MovieList = ({movies}) => {
   
    return (
    <div>
     <ul > 
        {movies.map(({ id, title}) => (
        <li key={id}>
            <Link to={`/movies/${id}`}>{title}</Link>
        </li>
))}
    </ul> 
    
  </div>)
  };