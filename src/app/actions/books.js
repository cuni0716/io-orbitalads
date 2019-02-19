import ACTIONS from 'constants/actions';

export const addBook = book => ({ type: ACTIONS.ADD_BOOK, book });

export const removeBook = index => ({ type: ACTIONS.REMOVE_BOOK, index });
