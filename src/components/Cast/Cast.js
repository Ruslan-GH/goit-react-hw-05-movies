import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast, IMG_URL } from '../services/movies-api';
import s from './Cast.module.css';
import fallback from '../../components/icons-actor.png';

const Cast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState(null);
  console.log(movieCast);

  useEffect(() => {
    getMovieCast(movieId).then(response => setMovieCast(response.cast));
  }, []);

  return (
    <>
      <h2 className={s.title}>Cast</h2>
      <div className={s.castGallery}>
        {movieCast &&
          movieCast.map(item => (
            <div key={item.id} className={s.castGalleryItem}>
              <img
                src={`${IMG_URL}${item.profile_path}`}
                alt={item.name}
                className={s.castGalleryItemImage}
                onError={e => (e.currentTarget.src = fallback)}
              />
              <p className={s.castName}>{item.name}</p>
              <p className={s.castCharacter}>Character: {item.character}</p>
            </div>
          ))}
      </div>
    </>
  );
};

export default Cast;
