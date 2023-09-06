import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '22a5ac0887c10804847656f832680839';

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

// виконую запит, щоб отримати список популярних фільмів, які трендять за день.
export async function getTrendingMovies() {
  try {
    const response = await api.get(`/trending/movie/day?page=1&language=en-US`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    return [];
  }
}
// шукаю фільми за ключовим словом

export async function getMoviesByKeyWord(query) {
  try {
    const response = await api.get(
      `/search/movie?page=1&query=${query}&language=en-US`
    );
    return response.data.results;
  } catch (error) {
    console.error('Error searching movies by keyword:', error);
    return [];
  }
}

// отримую інформацію про фільм за його id
export async function getMoviesById(id) {
  try {
    const response = await api.get(`/movie/${id}?language=en-US`);
    return response.data;
  } catch (error) {
    console.error('Error fetching movie by ID:', error);
    throw error;
  }
}

// отримую інформацію про акторський склад фільму за його id
export async function getCast(id) {
  try {
    const response = await api.get(`/movie/${id}/credits?language=en-US`);
    return response.data.cast;
  } catch (error) {
    console.error('Error fetching cast by movie ID:', error);
    return [];
  }
}

// отримую відгуки про фільм за його id
export async function getReviews(id) {
  try {
    const response = await api.get(`/movie/${id}/reviews?language=en-US`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching reviews by movie ID:', error);
    return [];
  }
}
