import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../services/movies-api';
import s from './Review.module.css';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMovieReviews(movieId).then(response => setReviews(response.results));
  }, []);

  return (
    <>
      {reviews.length === 0 && (
        <h1 className={s.title}>
          We do not have any reviews for this movie 😔{' '}
        </h1>
      )}
      <div className={s.container}>
        {reviews &&
          reviews.map(review => (
            <div key={review.id}>
              <h4 className={s.author}>{review.author}</h4>
              <p>{review.content}</p>
            </div>
          ))}
      </div>
    </>
  );
};

export default Reviews;
