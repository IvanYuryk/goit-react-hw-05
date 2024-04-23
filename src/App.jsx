import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "./components/Loader/Loader";
import Navigation from "./components/Navigation/Navigation";

import "./App.css";

const HomePage = React.lazy(() => import("./pages/HomePage/HomePage"));
const MoviesPage = React.lazy(() => import("./pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = React.lazy(() =>
  import("./pages/MovieDetailsPage/MovieDetailsPage")
);
const MovieCast = React.lazy(() => import("./components/MovieCast/MovieCast"));
const MovieReviews = React.lazy(() =>
  import("./components/MovieReviews/MovieReviews")
);

const NotFoundPage = React.lazy(() =>
  import("./pages/NotFoundPage/NotFoundPage")
);

function App() {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route
              path="/movies/:movieId"
              element={<MovieDetailsPage to={"/movies/:movieId/*"} />}
            >
              <Route path="cast" element={<MovieCast />} />
              <Route path="reviews" element={<MovieReviews />} />
            </Route>
            <Route path="*" element={<NotFoundPage to={"/"} />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}

export default App;
