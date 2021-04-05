import React, { useState, useReducer } from 'react';
import Modal from './components/Modal';
import reducer from './components/reducer';

const defaultState = {
    items: [],
    isModalOpen: false,
    modalContent: '',
};

function App() {
    const [name, setName] = useState('');
    const [state, dispatch] = useReducer(reducer, defaultState);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name) {
            const newItem = {
                id: new Date().getTime().toString(),
                name,
            };
            dispatch({ type: 'ADD_ITEM', payload: newItem });
            setName('');
            e.target.reset();
        } else {
            dispatch({ type: 'NO_VALUE' });
        }
    };

    const closeModal = () => {
        dispatch({ type: 'CLOSE_MODAL' });
    };
    return (
        <>
            {state.isModalOpen && (
                <Modal
                    closeModal={closeModal}
                    modalContent={state.modalContent}
                />
            )}
            <form className='form' onSubmit={handleSubmit}>
                <input type='text' onChange={(e) => setName(e.target.value)} />
                <button type='submit'>add</button>
            </form>
            {state.items.map((item) => {
                return (
                    <div className='item' key={item.id}>
                        <p>{item.name}</p>
                        <button
                            onClick={() =>
                                dispatch({
                                    type: 'REMOVE_ITEM',
                                    payload: item.id,
                                })
                            }
                        >
                            remove
                        </button>
                    </div>
                );
            })}
        </>
    );
}

export default App;
