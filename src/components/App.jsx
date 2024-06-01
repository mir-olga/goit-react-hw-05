import { Routes, Route } from "react-router-dom";
import { Navigation } from "./Navigation/Navigation";
import { MovieCast } from "./MovieCast/MovieCast";
import { MovieReviews } from "./MovieReviews/MovieReviews";
import HomePage from '../pages/HomePage/HomePage';
import MoviesPage from '../pages/MoviesPage/MoviesPage';
import MovieDetailsPage from '../pages/MovieDetailsPage/MovieDetailsPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';

export const App = () => {
  
 /* useEffect(() => {
    async function fetchArticles() {
      const response = await getSearchMovies("Lion");
			console.log(response);
    }

    fetchArticles();
  }, []);*/

  return (
    <div>
      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />}/>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};