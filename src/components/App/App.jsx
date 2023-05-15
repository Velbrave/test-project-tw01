import { Routes, Route } from 'react-router-dom';
import HomePage from '../../page/HomePage/HomePage';
import Header from '../Header/Header';
import UpdatePage from '../../page/UpdatePage/UpdatePage';
import NotFound from '../NotFound/NotFound';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/update/:id" element={<UpdatePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
