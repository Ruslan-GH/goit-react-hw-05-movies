import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav>
      <NavLink
        to="/"
        className={s.link}
        style={({ isActive }) => ({ color: isActive ? 'red' : '#2a363b' })}
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        className={s.link}
        style={({ isActive }) => ({ color: isActive ? 'red' : '#2a363b' })}
      >
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
