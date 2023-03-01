import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import * as TrendingMoviesAPI from '../services/movies-api';
import s from './HomePage.module.css';

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState(null);

  useEffect(() => {
    TrendingMoviesAPI.fetchTrendingMovies().then(({ results }) => {
      setTrendingMovies(results);
    });
  }, []);

  return (
    <div className={s.container}>
      <h2 className={s.title}>Trending today</h2>
      {trendingMovies && (
        <ul>
          {trendingMovies.map(movie => (
            <li key={movie.id} className={s.link}>
              <NavLink to={`/movies/${movie.id}`}>
                <span className={s.movieTitle}>
                  {movie.title || movie.name}
                </span>
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HomePage;
