import { combineReducers } from 'redux';
import books from './books';
import discount from './discount';

export default combineReducers({
  books,
  discount,
});
