import { Suspense, useEffect, useState } from 'react';
import { Outlet, NavLink, useParams, useNavigate } from 'react-router-dom';
import { getMovieDetails, IMG_URL } from '../services/movies-api';
import s from './MovieDetails.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const nav = useNavigate();

  useEffect(() => {
    getMovieDetails(movieId).then(response => setMovieDetails(response));
  }, []);

  return (
    <div>
      <button type="button" className={s.button} onClick={() => nav(-1)}>
        ⏎ Go back
      </button>
      {movieDetails && (
        <div className={s.wrapper}>
          <div className={s.container}>
            <img
              src={`${IMG_URL}${movieDetails.poster_path}`}
              alt={movieDetails.title}
              className={s.img}
            />
            <div className={s.containerInfo}>
              <h2 key={movieDetails.id} className={s.movie}>
                {movieDetails.title} (
                {new Date(movieDetails.release_date).getFullYear()})
              </h2>
              <p>User score: {Math.round(movieDetails.vote_average)}%</p>
              <h3>Overview</h3>
              <p>{movieDetails.overview}</p>
              <h3>Genres</h3>
              {movieDetails.genres.map(genre => (
                <span key={genre.id}>{genre.name}</span>
              ))}
            </div>
          </div>
          <div>
            <ul className={s.additionalInfo}>
              <h4>Additional information</h4>
              <NavLink to={`cast`} className={s.link}>
                Cast
              </NavLink>
              <NavLink to={`reviews`} className={s.link}>
                Review
              </NavLink>
            </ul>
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
