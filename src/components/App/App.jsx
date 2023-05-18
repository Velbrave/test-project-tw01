import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from '../Layout/Layout';
import NotFound from '../NotFound/NotFound';

const HomePage = lazy(() => import('../../page/HomePage/HomePage'));
const UpdatePage = lazy(() => import('../../page/UpdatePage/UpdatePage'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="update/:id" element={<UpdatePage />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
