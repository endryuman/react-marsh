import { useEffect, useState } from 'react';
import { fetchEventsByName } from '../servises/eventsApi';
import { Link, Outlet, useLocation, useSearchParams } from 'react-router-dom';

export const SearchPage = () => {
  const [events, setEvents] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const eventName = searchParams.get('eventName');
  const location = useLocation();

  useEffect(() => {
    if (!eventName) return;
    fetchEventsByName(eventName).then(setEvents);
  }, [eventName]);

  const handleSubmit = e => {
    e.preventDefault();
    const keyword = e.currentTarget;
    setSearchParams({ eventName: keyword.elements.eventName.value });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="eventName" />
        <button type="submit">Search</button>
      </form>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            <Link to={event.id} state={{ from: location }}>
              {event.name}
            </Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
};
