import { useState, useEffect } from 'react';
// import { useSearchParams } from 'react-router-dom';

import {
  PageContainer,
  SearchForm,
  SearchInput,
  Button,
  MoviesList,
  MovieItem,
} from './MoviesPage.styled';

import { getMoviesByKeyWord } from 'services/api';

const MoviesPage = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query === '') return;

    const fetchMovies = async () => {
      setLoading(true);
      try {
        const fetchedMovies = await getMoviesByKeyWord(query);
        setMovies(fetchedMovies);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [query]);

  const handleSubmit = event => {
    event.preventDefault();
    const value = event.target.elements.searchQuery.value.trim();
    if (value !== '') {
      setQuery(value);
    }
  };

  const resetResults = () => {
    setMovies([]);
    setError(null);
    setQuery('');
  };

  return (
    <PageContainer>
      <SearchForm onSubmit={handleSubmit}>
        <SearchInput
          type="text"
          name="searchQuery"
          placeholder="Find movie..."
          autoComplete="off"
          autoFocus
        />
        <Button type="submit">Search</Button>
        <Button type="button" onClick={resetResults}>
          Reset results
        </Button>
      </SearchForm>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <MoviesList>
        {movies.map(movie => (
          <MovieItem key={movie.id}>{movie.title}</MovieItem>
        ))}
      </MoviesList>
    </PageContainer>
  );
};

export default MoviesPage;
