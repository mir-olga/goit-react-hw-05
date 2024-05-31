import { Routes, Route } from "react-router-dom";
import { useEffect } from 'react';
//import { getSearchMovies, getTrendingMovies } from '../api';

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
        
          <Route path="/movies/:movieId/cast" element={<MovieCast />} />
          <Route path="/movies/:movieId/reviews" element={<MovieReviews />}/>
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>

    <div>
      <h1>Latest articles</h1>
    </div>

    </div>
  );
};