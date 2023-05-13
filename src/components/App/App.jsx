import { Routes, Route } from 'react-router-dom';
import HomePage from '../../page/HomePage/HomePage';
import Header from '../Header/Header';
import UpdatePage from '../../page/UpdatePage/UpdatePage';
import NotFound from '../NotFound/NotFound';
import css from './App.module.css';

function App() {
  return (
    <div className={css.app}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/update/:id" element={<UpdatePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
