import React from 'react';
import ListItem from '../../components/ListItem/ListItem';
import WorkSpace from '../../components/WorkSpace/WorkSpace';
import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={css.home}>
      <ListItem />
      <WorkSpace />
    </div>
  );
};

export default HomePage;
