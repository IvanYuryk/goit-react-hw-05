import { fetchMovieReviews } from "../../api/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import css from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { movieId } = useParams();

  const [reviewsMovie, setReviewMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!movieId) return;

    async function getCast() {
      try {
        setLoading(true);
        const fetchedCast = await fetchMovieReviews(movieId);
        setReviewMovie(fetchedCast);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    getCast();
  }, [movieId]);

  const scrollToBottom = () => {
    window.scrollBy({
      top: 400,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (!loading) {
      scrollToBottom();
    }
  }, [loading]);

  return (
    <div>
      {loading && <Loader />}
      {error && (
        <p className={css.errorMessage}>
          Something went wrong! Please reload the page!
        </p>
      )}

      {reviewsMovie.length > 0 ? (
        <ul>
          {reviewsMovie.map((review) => (
            <li className={css.reviewInfo} key={review.id}>
              <h2 className={css.reviewAuthor}>Author: {review.author}</h2>
              <p className={css.reviewText}>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className={css.errorMessage}>
          We don`t have any reviews for this movie.
        </p>
      )}
    </div>
  );
};

export default MovieReviews;
