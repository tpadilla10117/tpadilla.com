import React, { useEffect, useRef } from 'react';
import styles from './Modal.module.scss';

const Modal = ( {children, onModalClose } ) => {

    const modalReference = useRef(null);

    useEffect(() => {
        document.body.classList.add(styles.ModalOpen);
        /* document.body.classList.remove(styles.ModalClosed) */
        return () => {
          document.body.classList.remove(styles.ModalOpen);
          /* document.body.classList.add(styles.ModalClosed) */
        }
      }, []);
    
    //To click anywhere on DOM and exit Modal:
      useEffect(() => {
        function handleClick(e) {
          if (!modalReference.current?.contains(e.target)) {
            onModalClose();
          }
        }
        document.addEventListener("click", handleClick);
        return () => document.removeEventListener("click", handleClick)
      });

    //Returns the modal UI: 
    return (
        <div id="modalContainer" className={styles.ModalContainer} role="dialog" aria-modal="true">
            <div className={styles.ModalContent} ref={modalReference}>
                <div className={styles.ModalHeader}>
                    <button id="testBtn" className={styles.CloseBtn} title="Close modal" onClick={onModalClose}>
                        x
                    </button>
                </div>
                {children}
            </div>
        </div>
    )

}

export default Modal;