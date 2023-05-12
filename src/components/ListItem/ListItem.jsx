import React, { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
import { db } from '../../firebase/config';
import { collection, doc, onSnapshot } from 'firebase/firestore';
import css from './ListItem.module.css';
import DeleteItem from '../DeleteItem/DeleteItem';

const ListItem = () => {
  const [posts, setPosts] = useState([]);
  // const filter = useSelector(state => state.filter);
  // const todos = useSelector(state => state.lists.lists);
  // const dispatch = useDispatch();

  const getAllPost = async () => {
    try {
      await onSnapshot(collection(db, 'todos'), data =>
        setPosts(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
      );
    } catch (error) {
      console.error('Error document: ', error);
    }
  };

  useEffect(() => {
    getAllPost();
  }, []);

  // const filteredTodos = posts.filter(post =>
  //   post.text[0].toLowerCase().includes(filter.toLowerCase())
  // );

  return (
    <ul className={css.todoList}>
      {posts.map(({ id, text, listId }) => {
        return (
          <li className={css.item} key={id}>
            <p className={css.textItem}>{text}</p>
            <p className={css.id}>{listId}</p>

            <DeleteItem id={id} />
          </li>
        );
      })}
    </ul>
  );
};

export default ListItem;
