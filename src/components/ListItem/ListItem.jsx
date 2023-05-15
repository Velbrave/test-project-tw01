import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../../firebase/config';
import { collection, onSnapshot } from 'firebase/firestore';
import css from './ListItem.module.css';
import { useSelector } from 'react-redux';

const ListItem = () => {
  const [posts, setPosts] = useState([]);
  const filter = useSelector(state => state.filter);

  useEffect(() => {
    const getAllPost = async () => {
      try {
        await onSnapshot(collection(db, 'todos'), data =>
          setPosts(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
        );
      } catch (error) {
        console.error('Error document: ', error);
      }
    };
    getAllPost();
  }, []);

  const filteredTodos = posts.filter(post =>
    post.text.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.todoList}>
      {filteredTodos.map(({ id, text, listId }) => {
        return (
          <Link to={`/update/${id}`}>
            <li className={css.item} key={id}>
              <p className={css.textItem}>{text}</p>
              <p className={css.id}>{listId}</p>
            </li>
          </Link>
        );
      })}
    </ul>
  );
};

export default ListItem;
