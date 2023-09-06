import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { getTrendingMovies } from 'services/api';
import { Container, Title, ListOfFilms } from './TrendingMovies.styled';

export const TrendingMoviesList = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getTrendingMovies();
        setTrendingMovies(data.results);
      } catch (error) {
        setError(error.message || 'An unexpected error occurred.');
      }
    };
    fetchMovies();
  }, []);

  return (
    <Container>
      <Title>Trending today</Title>
      {error && (
        <p>
          Something went wrong: {error}. Please reload the page to try again.
        </p>
      )}
      <ListOfFilms>
        {trendingMovies.map(trendingMovie => (
          <li key={trendingMovie.id}>
            <Link to={`movies/${trendingMovie.id}`} state={{ from: location }}>
              {trendingMovie.title}
            </Link>
          </li>
        ))}
      </ListOfFilms>
    </Container>
  );
};
