import ACTIONS from 'constants/actions';

const initialState = {
  list: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.ADD_BOOK:
      return {
        ...state,
        list: [...state.list, action.book],
      };

    case ACTIONS.REMOVE_BOOK:
      return {
        ...state,
        list: [
          ...state.list.slice(0, action.index),
          ...state.list.slice(action.index + 1),
        ],
      };

    default:
      return state;
  }
};
