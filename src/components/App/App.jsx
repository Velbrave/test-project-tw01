import { Routes, Route } from 'react-router-dom';
import HomePage from '../../page/HomePage/HomePage';
import UpdatePage from '../../page/UpdatePage/UpdatePage';
import NotFound from '../NotFound/NotFound';
import { Layout } from '../Layout/Layout';

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
