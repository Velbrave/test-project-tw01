import React from 'react';
import ListItem from '../../components/ListItem/ListItem';
import TodoItem from '../../components/TodoItem/TodoItem';
import css from './UpdatePage.module.css';

const UpdateTodo = () => {
  return (
    <div className={css.home}>
      <ListItem />
      <TodoItem />
    </div>
  );
};

export default UpdateTodo;
