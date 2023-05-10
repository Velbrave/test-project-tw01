import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteLists } from '../../redux/listsSlice';
import css from './Sidebar.module.css';
import { GoPlus } from 'react-icons/go';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { SlNote } from 'react-icons/sl';

const Sidebar = ({ id }) => {
  const dispatch = useDispatch();
  console.log(id);
  return (
    <div className={css.sidebar}>
      <button className={css.button}>
        <GoPlus />
      </button>
      <button className={css.button} onClick={() => dispatch(deleteLists(id))}>
        <RiDeleteBin6Line />
      </button>
      <button className={css.button}>
        <SlNote />
      </button>
    </div>
  );
};

export default Sidebar;
