import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteLists } from '../../redux/listsSlice';
import css from './ListItem.module.css';
import { RiDeleteBin6Line } from 'react-icons/ri';

const ListItem = () => {
  const todos = useSelector(state => state.lists.lists);
  const dispatch = useDispatch();
  console.log(todos);
  return (
    <ul className={css.todoList}>
      {todos.map(({ id, text }) => {
        return (
          <li className={css.item} key={id}>
            <p>{text}</p>
            <p className={css.id}>{id}</p>
            <button
              className={css.button}
              onClick={() => dispatch(deleteLists(id))}
            >
              <RiDeleteBin6Line />
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ListItem;
