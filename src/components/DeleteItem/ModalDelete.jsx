import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate, useParams } from 'react-router-dom';
import { db } from '../../firebase/config';
import { doc, deleteDoc } from 'firebase/firestore';
import { MdClose } from 'react-icons/md';
import css from './ModalDelete.module.css';

const modalRoot = document.querySelector('#modal-root');

const ModalDelete = ({ closeModal, text, setText, setTodoId }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      await deleteDoc(doc(db, 'todos', id));
    } catch (error) {
      console.error('Error adding document: ', error);
    }
    closeModal();
    setText('');
    setTodoId('');
    navigate('/', { replace: true });
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = event => {
    if (event.code === 'Escape') {
      closeModal();
    }
  };

  const handleBackdrop = event => {
    if (event.currentTarget === event.target) {
      closeModal();
    }
  };

  return createPortal(
    <div className={css.backdrop} onClick={handleBackdrop}>
      <div className={css.containerModal}>
        <div className={css.modal}>
          <button
            type="button"
            className={css.btnCloseModal}
            onClick={closeModal}
          >
            <MdClose className={css.close} />
          </button>
          <h2 className={css.title}>Do you approve the deletion?</h2>
          <p className={css.text}>{text}</p>
          <div className={css.btnContainer}>
            <button className={css.btn} onClick={handleDelete}>
              Delete
            </button>
            <button className={css.btn} onClick={closeModal}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>,
    modalRoot
  );
};

export default ModalDelete;
