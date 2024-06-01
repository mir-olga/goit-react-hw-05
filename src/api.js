import axios from 'axios';

axios.defaults.baseURL="https://api.themoviedb.org/3";
axios.defaults.headers.common.Authorization='Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NDJjYjM2NzQ1YzQ2ZDVjZDQxNmU4M2Y5MzJmNzg1YyIsInN1YiI6IjY2MWE5NDc2OTNkYjkyMDE3ZDBiOWU0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OBYwFBkQ7E8hUk0iiVrjmgCmhQhCUA1VKYaWZVvkYck'
  
axios.defaults.params = {language:"en-US"};

export const getTrendingMovies = async () => {
  const response = await axios.get("/trending/movie/day");
  return response.data;
}

export const getSearchMovies = async (query) => {
  const response = await axios.get(`/search/movie?query=${query}&include_adult=false&page=1`);
  return response.data;
}

export const getMovieDetails = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}?language=en-US`);
  return response.data;
}

export const getMovieCredits = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}/credits?language=en-US`);
  return response.data;
}

export const getMovieReviews = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}/reviews?language=en-US&page=1`);
  return response.data;
}