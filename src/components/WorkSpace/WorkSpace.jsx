import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addLists } from '../../redux/listsSlice';
import css from './WorkSpace.module.css';
import { SlNote } from 'react-icons/sl';

const WorkSpace = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleChange = event => {
    setText(event.target.value);
  };

  const handleSubmit = event => {
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
          <SlNote />
        </button>
      </label>
    </form>
  );
};

export default WorkSpace;
