import {
  NavLink,
  Outlet,
  useParams,
  useLocation,
  Link,
} from 'react-router-dom';
import { useEffect, useState, Suspense, useRef } from 'react';

import { getMoviesById } from 'services/api';
import {
  Additional,
  Container,
  DataText,
  Genres,
  ListOfAdditional,
  Overview,
  Title,
  WrapperAdditional,
  WrapperMain,
} from './MovieDetailsPage.styled';

const FilmDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from || '/');

  const [film, setFilms] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    const fetchFilmDetails = async () => {
      try {
        const fetchedFilm = await getMoviesById(id);

        if (!fetchedFilm || !fetchedFilm.genres) {
          setError('Інформація по фільму відсутня');
          setStatus('rejected');
          return;
        }

        setFilms(fetchedFilm);
        setStatus('resolved');
      } catch (error) {
        setError(error.message);
        setStatus('rejected');
      }
    };

    fetchFilmDetails();
  }, [id]);

  const { title, overview, vote_average, release_date, genres, poster_path } =
    film || {};

  return (
    <Container>
      <NavLink to={backLinkRef.current}>Back</NavLink>

      {status === 'rejected' && <p>{error}</p>}

      {status === 'resolved' && film && (
        <>
          <WrapperMain>
            <img
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt={title}
            />
            <div>
              <Title>
                {title} <span> ({release_date?.split('-')[0]})</span>
              </Title>
              <DataText>
                User Score: {(vote_average * 10).toFixed(0)} %
              </DataText>
              <Overview>Overview</Overview>
              <DataText>{overview}</DataText>
              <Genres>Genres</Genres>
              <DataText>{genres.map(el => el.name).join(' / ')}</DataText>
            </div>
          </WrapperMain>
          <WrapperAdditional>
            <Additional>Additional information</Additional>
            <ListOfAdditional>
              <li>
                <Link to="cast">Cast</Link>
              </li>
              <li>
                <Link to="reviews">Reviews</Link>
              </li>
            </ListOfAdditional>
          </WrapperAdditional>
        </>
      )}

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default FilmDetails;
