import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '22a5ac0887c10804847656f832680839';

// виконую запит, щоб отримати список популярних фільмів, які трендять за день.
export function fetchTrendingMovies() {
  return axios
    .get(
      `${BASE_URL}trending/movie/day?api_key=${API_KEY}&page=1&language=en-US`
    )
    .then(response => response.data.results);
}

// шукаю фільми за ключовим словом
export function fetchMoviesByKeyWord(query) {
  return axios
    .get(
      `${BASE_URL}search/movie?api_key=${API_KEY}&page=1&query=${query}&language=en-US`
    )
    .then(response => response.data.results);
}

// отримую інформацію про фільм за його id
export function fetchMoviesById(id) {
  return axios
    .get(`${BASE_URL}movie/${id}?api_key=${API_KEY}&language=en-US`)
    .then(response => response.data);
}

// отримую інформацію про акторський склад фільму за його id
export function fetchCast(id) {
  return axios
    .get(`${BASE_URL}movie/${id}/credits?api_key=${API_KEY}&language=en-US`)
    .then(response => response.data.cast);
}

// отримую відгуки про фільм  за його id
export function fetchReviews(id) {
  return axios
    .get(`${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}&language=en-US`)
    .then(response => response.data.results);
}
