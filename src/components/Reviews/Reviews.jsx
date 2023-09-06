import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getReviews } from 'services/api';
import { ReviewsList, ReviewItem, Author, Content } from './Reviews.styled';

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle'); // початковий статус

  useEffect(() => {
    const fetchReviews = async () => {
      setStatus('loading');

      try {
        const data = await getReviews(id);
        const reviews = data.results;

        if (!reviews.length) {
          setError(`Відгуки відсутні :(`);
          setStatus('rejected');
          return;
        }

        setReviews(reviews);
        setStatus('resolved');
      } catch (error) {
        setError(error.message);
        setStatus('rejected');
      }
    };

    fetchReviews();
  }, [id]);

  return (
    <ReviewsList>
      {status === 'loading' && <p>Завантаження...</p>}
      {status === 'rejected' && <p>{error}</p>}
      {status === 'resolved' &&
        reviews.map(review => (
          <ReviewItem key={review.id}>
            <Author>Author: {review.author}</Author>
            <Content>{review.content}</Content>
          </ReviewItem>
        ))}
    </ReviewsList>
  );
};

export default Reviews;
