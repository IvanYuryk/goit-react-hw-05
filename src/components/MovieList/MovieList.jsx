import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

const MovieList = ({ items }) => {
  const defaultImage =
    "https://via.placeholder.com/250x375.png?text=Image+Not+Found";
  const location = useLocation();

  return (
    <ul className={css.movieList}>
      {items.map(({ poster_path, name, title, id }) => (
        <li className={css.movieCard} key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            {
              <div>
                <img
                  className={css.image}
                  src={
                    poster_path
                      ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                      : defaultImage
                  }
                  alt={name || title}
                  width={250}
                  height={375}
                />
                <h2 className={css.movieTitle}>{name || title}</h2>
              </div>
            }
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
