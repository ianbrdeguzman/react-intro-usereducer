import React, { useEffect } from 'react';

const Modal = ({ modalContent, closeModal }) => {
    useEffect(() => {
        const timeout = setTimeout(() => {
            closeModal();
        }, 3000);
        return () => {
            clearTimeout(timeout);
        };
    });
    return <p className='modal'>{modalContent}</p>;
};

export default Modal;
