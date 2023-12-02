import { useLocation, useNavigate } from 'react-router-dom';
import { useFetchEvent } from '../hooks/useFatchEvent';

export const EventDetailsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const event = useFetchEvent();

  return (
    <>
      <button
        type="button"
        onClick={() => navigate(location.state?.from ?? '/')}
      >
        Go back
      </button>
      {event && (
        <>
          <h2>{event.name}</h2>
          <img src={event.images[0].url} alt={event.name} width="150" />
          <h3>{event.classifications[0].genre.name}</h3>
          <p>{event.classifications[0].subGenre.name}</p>
        </>
      )}
    </>
  );
};
