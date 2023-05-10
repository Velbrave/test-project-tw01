import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import SearchBox from '../../components/SearchBox/SearchBox';
import css from './Header.module.css';

const Header = () => {
  return (
    <div className={css.header}>
      <Sidebar />
      <SearchBox />
    </div>
  );
};

export default Header;
