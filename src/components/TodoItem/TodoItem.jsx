import React, { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { deleteLists } from '../../redux/listsSlice';
// import css from './TodoItem.module.css';
// import { RiDeleteBin6Line } from 'react-icons/ri';
// import { db } from '../../firebase/config';
// import { collection, doc, onSnapshot } from 'firebase/firestore';

const TodoItem = ({ id, text }) => {
  // const [post, setPosts] = useState([]);
  // const dispatch = useDispatch();

  // const getAllPost = async () => {
  //   await onSnapshot(collection(db, 'todos'), data =>
  //     setPosts(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
  //   );
  // };

  // useEffect(() => {
  //   getAllPost();
  // }, []);

  // console.log('post', post);

  return (
    <ul>
      <h2>TODO</h2>
      {/* {post.map(({ id, text }) => {
        return (
          <li className={css.item} key={id}>
            <p className={css.id}>{id}</p>
            <p className={css.textItem}>{text}</p>
            <button
              className={css.button}
              onClick={() => dispatch(deleteLists(id))}
            >
              <RiDeleteBin6Line />
            </button>
          </li>
        );
      })} */}
    </ul>
  );
};

export default TodoItem;
