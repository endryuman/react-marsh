import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchEventById } from 'servises/eventsApi';
export const EventsSubPage = () => {
  const [event, setEvent] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetchEventById(id).then(setEvent);
  }, [id]);
  console.log(event);
  return (
    <>
      {event && (
        <>
          <p> {event.name}</p>
          <img width="200" alt={event.name} src={event.images[0].url} />
        </>
      )}
    </>
  );
};
