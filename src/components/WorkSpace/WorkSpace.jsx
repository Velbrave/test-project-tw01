import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addLists } from '../../redux/listsSlice';
import css from './WorkSpace.module.css';
import { GoPlus } from 'react-icons/go';
import { db } from '../../firebase/config';
import { collection, addDoc } from 'firebase/firestore';

const WorkSpace = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleChange = event => {
    setText(event.target.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const todoId = new Date().toLocaleString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      timezone: 'UTC',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    });

    const formData = { id: todoId, text };

    dispatch(addLists(formData));

    setText('');

    try {
      const docRef = await addDoc(collection(db, 'todos'), {
        listId: todoId,
        text: text,
      });
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label} htmlFor="">
        <textarea
          className={css.input}
          value={text}
          onChange={handleChange}
        ></textarea>
        <button className={css.button} type="submit">
          <GoPlus className={css.plus} />
        </button>
      </label>
    </form>
  );
};

export default WorkSpace;
