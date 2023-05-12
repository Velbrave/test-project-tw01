import React from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { db } from '../../firebase/config';
import { doc, deleteDoc } from 'firebase/firestore';
import css from './DeleteItem.module.css';

const DeleteItem = ({ id }) => {
  const handleDelete = async () => {
    try {
      await deleteDoc(doc(db, 'todos', id));
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };
  return (
    <div>
      <button className={css.button} onClick={handleDelete}>
        <RiDeleteBin6Line />
      </button>
    </div>
  );
};

export default DeleteItem;
