import { Link, Navigate } from "react-router-dom";
import css from "./NotFoundPage.module.css";
import { useEffect, useState } from "react";

const NotFoundPage = () => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  if (timer === 5) {
    return <Navigate to="/home" replace />;
  }

  return (
    <div className={css.notFound}>
      <h1>The page you are looking for does not exist!</h1>
      <h2 className={css.notFoundText}>
        You will be redirected to the main page in {5 - timer} seconds
      </h2>
      <button className={css.btnGoHome}>
        <Link to="/home">Go home</Link>
      </button>
    </div>
  );
};

export default NotFoundPage;
