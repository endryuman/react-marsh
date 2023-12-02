import { fetchEventById } from 'servises/eventsApi';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const useFetchEvent = () => {
  const [event, setEvent] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetchEventById(id).then(setEvent);
  }, [id]);

  return event;
};
