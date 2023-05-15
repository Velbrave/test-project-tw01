import React from 'react';
import { Link } from 'react-router-dom';
import SearchBox from '../SearchBox/SearchBox';
import css from './Header.module.css';
import { GoPlus } from 'react-icons/go';
import { SlNote } from 'react-icons/sl';

const Header = () => {
  return (
    <div className={css.header}>
      <nav className={css.sidebar}>
        <Link to="/">
          <button className={css.button}>
            <GoPlus className={css.plus} />
          </button>
        </Link>
        <Link to="/update/:id">
          <button className={css.button}>
            <SlNote className={css.note} />
          </button>
        </Link>
      </nav>
      <SearchBox />
    </div>
  );
};

export default Header;
