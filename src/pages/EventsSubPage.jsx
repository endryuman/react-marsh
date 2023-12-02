import { Link, useLocation } from 'react-router-dom';
import { useFetchEvent } from '../hooks/useFatchEvent';

export const EventsSubPage = () => {
  const location = useLocation();
  const event = useFetchEvent();
  return (
    <>
      {event && (
        <>
          <p> {event.name}</p>
          <img width="200" alt={event.name} src={event.images[0].url} />
        </>
      )}
      <Link to="details" state={location.state}>
        More info
      </Link>
    </>
  );
};
