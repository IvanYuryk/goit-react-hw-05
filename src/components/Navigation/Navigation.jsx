import { NavLink } from "react-router-dom";
import clsx from "clsx";

import css from "./Navigation.module.css";

const getNavLinkStyle = ({ isActive }) =>
  clsx(css.navLink, { [css.active]: isActive });

const Navigation = () => {
  return (
    <nav className={css.nav}>
      <NavLink className={getNavLinkStyle} to="/">
        Home
      </NavLink>
      <NavLink className={getNavLinkStyle} to="/movies">
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
