import ACTIONS from 'constants/actions';

const initialState = {
  value: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.APPLY_DISCOUNT:
      return {
        ...state,
        value: action.discount,
      };

    default:
      return state;
  }
};
