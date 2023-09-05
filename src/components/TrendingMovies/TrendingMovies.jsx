import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Container } from 'components/SharedLayout/SharedLayout.styled';

export const TrendingMoviesList = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [error, setError] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await fetchTrendingMovies();
        const trendingMovies = data.results;
        setTrendingMovies(trendingMovies);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchMovies();
  }, []);

  return (
    <Container>
      <Title>Trending today</Title>
      {error && (
        <p>Something went wrong. Please reload the page to try again.</p>
      )}
    </Container>
  );
};
