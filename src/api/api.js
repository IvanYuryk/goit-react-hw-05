import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";

const API_KEY = "aa27a15e24680a939bf5a0001a9da413";
const token =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTI3YTE1ZTI0NjgwYTkzOWJmNWEwMDAxYTlkYTQxMyIsInN1YiI6IjY2MWU5NmRlMjBhZjc3MDE2NDNkODQzZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DwDwo2rL7xHG-2IE8QEaFk4CNXn-Puc8MkRMNdgz3Q4";

axios.defaults.headers.common["Authorization"] = token;

export const fetchTrendingList = async () => {
  const response = await axios.get(`/trending/all/day?api_key=${API_KEY}`);
  const { results } = response.data;
  return results;
};

export const fetchMoviesBySearch = async (query) => {
  const response = await axios.get(
    `/search/movie?query=${query}&api_key=${API_KEY}`
  );
  const { results } = response.data;
  return results;
};

export const fetchMovieById = async (movieId) => {
  try {
    const response = await axios.get(`/movie/${movieId}?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      return { error: "Movie not found" };
    } else {
      return { error: "Something went wrong! Please reload the page!" };
    }
  }
};

export const fetchMovieCast = async (movieId) => {
  const response = await axios.get(
    `/movie/${movieId}/credits?api_key=${API_KEY}`
  );
  const { cast } = response.data;
  return cast;
};

export const fetchMovieReviews = async (movieId) => {
  const response = await axios.get(
    `/movie/${movieId}/reviews?api_key=${API_KEY}`
  );
  const { results } = response.data;
  return results;
};
