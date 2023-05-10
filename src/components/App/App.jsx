import HomePage from '../../page/HomePage/HomePage';
import Header from '../../page/Header/Header';
import css from './App.module.css';

function App() {
  return (
    <div className={css.app}>
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
