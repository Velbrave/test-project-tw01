import React from 'react';
import css from './Sidebar.module.css';
import { GoPlus } from 'react-icons/go';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { SlNote } from 'react-icons/sl';

const Sidebar = () => {
  return (
    <div className={css.sidebar}>
      <button className={css.button}>
        <GoPlus />
      </button>
      <button className={css.button}>
        <RiDeleteBin6Line />
      </button>
      <button className={css.button}>
        <SlNote />
      </button>
    </div>
  );
};

export default Sidebar;
