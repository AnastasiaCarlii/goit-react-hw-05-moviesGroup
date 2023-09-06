import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { getCast } from 'services/api';
import { CastList } from './Cast.styled';

const Cast = () => {
  const { id } = useParams();
  const [castList, setCastList] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('pending');

  useEffect(() => {
    const fetchCast = async () => {
      setStatus('loading');

      try {
        const data = await getCast(id);
        const fetchedCasts = data || [];

        if (!fetchedCasts.length) {
          setError(`There are no actors for this movie yet, sorry`);
          setStatus('rejected');
        } else {
          setCastList(fetchedCasts);
          setStatus('resolved');
        }
      } catch (error) {
        setError(error.message);
        setStatus('rejected');
      }
    };

    fetchCast();
  }, [id]);

  return (
    <CastList>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'rejected' && <p>{error}</p>}

      {status === 'resolved' && (
        <ul>
          {castList.map(cast => (
            <li key={cast.id}>
              {cast.profile_path ? (
                <>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
                    alt={cast.name}
                  />
                  <p>Name: {cast.name}</p>
                  <p>Character: {cast.character}</p>
                </>
              ) : (
                <>
                  <p>Name: {cast.name}</p>
                  <p>Character: {cast.character}</p>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </CastList>
  );
};

export default Cast;
