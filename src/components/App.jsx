import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Homepage } from 'pages/Homepage';
import { EventsPage } from 'pages/EventsPage';
import { EventsSubPage } from 'pages/EventsSubPage';
import { SearchPage } from 'pages/SearchPage';
import { EventDetailsPage } from '../pages/EventDetailsPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="events" element={<EventsPage />}>
          <Route path=":id" element={<EventsSubPage />} />
        </Route>
        <Route path="search" element={<SearchPage />}>
          <Route path=":id" element={<EventsSubPage />} />
        </Route>
        <Route path="events/:id/details" element={<EventDetailsPage />} />
        <Route path="search/:id/details" element={<EventDetailsPage />} />
      </Route>
    </Routes>
  );
};
