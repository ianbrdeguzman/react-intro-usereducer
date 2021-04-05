const reducer = (state, action) => {
    if (action.type === 'ADD_ITEM') {
        const newItems = [...state.items, action.payload];
        return {
            ...state,
            items: newItems,
            isModalOpen: true,
            modalContent: 'item added',
        };
    } else if (action.type === 'NO_VALUE') {
        return {
            ...state,
            isModalOpen: true,
            modalContent: 'please enter a value',
        };
    } else if (action.type === 'REMOVE_ITEM') {
        const newItems = state.items.filter(
            (item) => item.id !== action.payload
        );
        return {
            ...state,
            items: newItems,
            isModalOpen: true,
            modalContent: 'item removed',
        };
    } else if (action.type === 'CLOSE_MODAL') {
        return { ...state, isModalOpen: false };
    } else {
        return state;
    }
};

export default reducer;
