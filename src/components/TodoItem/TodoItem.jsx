import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SlNote } from 'react-icons/sl';
import css from './TodoItem.module.css';
import { db } from '../../firebase/config';
import { doc, getDoc, updateDoc } from 'firebase/firestore';

const TodoItem = () => {
  const [text, setText] = useState('');
  const [todoId, setTodoId] = useState('');
  const { id } = useParams();

  const docRef = doc(db, 'todos', id);

  useEffect(() => {
    async function fetchData() {
      try {
        const docSnap = await getDoc(doc(db, 'todos', id));
        setText(docSnap.data().text);
        setTodoId(docSnap.data().listId);
      } catch (error) {
        console.error('Select todo!', error.message);
      }
    }
    fetchData();
  }, [id]);

  const handleChange = event => {
    setText(event.target.value);
  };

  const UpdateTodo = async () => {
    try {
      await updateDoc(docRef, {
        text: text,
      });
    } catch (error) {
      console.error('This todo does not exist!', error.message);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    UpdateTodo();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label} htmlFor="">
        <p className={css.todoId}>{todoId}</p>
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

export default TodoItem;
