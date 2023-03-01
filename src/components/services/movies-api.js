const API_KEY = '7467a83c5142a1485e7c8ac51f2e57d9';
const BASE_URL = 'https://api.themoviedb.org/3/';
export const IMG_URL = 'https://image.tmdb.org/t/p/w300';

export function searchMovies(SEARCH_QERY) {
  return fetch(
    `${BASE_URL}search/movie?api_key=${API_KEY}&query=${SEARCH_QERY}`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(
      new Error('Something went wrong 😔. Try again later')
    );
  });
}

export function fetchTrendingMovies() {
  return fetch(`${BASE_URL}trending/all/day?api_key=${API_KEY}`).then(
    response => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(
        new Error('Something went wrong 😔. Try again later')
      );
    }
  );
}

export function getMovieDetails(movieId) {
  return fetch(`${BASE_URL}movie/${movieId}?api_key=${API_KEY}`).then(
    response => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(
        new Error('Something went wrong 😔. Try again later')
      );
    }
  );
}

export function getMovieCast(movieId) {
  return fetch(`${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}`).then(
    response => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(
        new Error('Something went wrong 😔. Try again later')
      );
    }
  );
}

export function getMovieReviews(movieId) {
  return fetch(`${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}`).then(
    response => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(
        new Error('Something went wrong 😔. Try again later')
      );
    }
  );
}
