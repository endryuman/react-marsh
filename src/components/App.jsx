import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Homepage } from 'pages/Homepage';
import { EventsPage } from 'pages/EventsPage';
import { EventsSubPage } from 'pages/EventsSubPage';
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="events" element={<EventsPage />}>
          <Route path=":id" element={<EventsSubPage />} />
        </Route>
      </Route>
    </Routes>
  );
};
