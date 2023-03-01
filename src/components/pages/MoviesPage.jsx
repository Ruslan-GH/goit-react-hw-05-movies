import { searchMovies } from '../services/movies-api';
import { useEffect, useState } from 'react';
import { NavLink, useSearchParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import s from './MoviesPage.module.css';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movieName, setMovieName] = useState(searchParams.get('query') ?? '');
  const [listMovies, setListMovies] = useState([]);

  const handleMovieChange = e => {
    const value = e.target.value.toLowerCase();
    setMovieName(value);
  };

  const handleSubmit = e => {
    if (e) e.preventDefault();
    if (movieName.trim() === '') {
      toast.error('Enter something');
      return;
    }
    setSearchParams({ query: movieName });
    searchMovies(movieName).then(({ results }) => {
      if (results.length > 0) {
        return setListMovies(results);
      }
      toast.error('Enter the corect input ☝️');
    });
    setMovieName('');
  };

  useEffect(() => {
    if (listMovies !== '')
      searchMovies(movieName).then(({ results }) => {
        setListMovies(results);
        setMovieName('');

        // setSearchParams({ query: movieName });
      });
  }, []);

  return (
    <div className={s.container}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={movieName}
          placeholder="enter the title"
          onChange={handleMovieChange}
        />
        <button type="submit" className={s.button}>
          Search
        </button>
      </form>
      {listMovies && (
        <ul>
          {listMovies.map(movie => (
            <li key={movie.id} className={s.link}>
              <NavLink to={`${movie.id}`}>
                <span className={s.movieTitle}>{movie.title}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MoviesPage;
