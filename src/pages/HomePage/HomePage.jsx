import { useEffect, useState } from "react";
import { fetchTrendingList } from "../../api/api";
import MovieList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader/Loader";
import css from "./HomePage.module.css";

const HomePage = () => {
  const [movieItems, setMovieItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getTrendingList() {
      try {
        setLoading(true);
        setError(false);

        const initialMovies = await fetchTrendingList();
        setMovieItems(initialMovies);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getTrendingList();
  }, []);

  return (
    <div>
      <h1 className={css.title}>Trending today</h1>
      {loading && <Loader />}
      {error && (
        <h2 className={css.errorMessage}>
          Something went wrong! Please reload the page!
        </h2>
      )}
      {movieItems.length > 0 && <MovieList items={movieItems} />}
    </div>
  );
};

export default HomePage;
