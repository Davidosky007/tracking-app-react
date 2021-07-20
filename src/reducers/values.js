import actions from '../actions/index';

const { ADD_VALUE } = actions;

const valueReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_VALUE: {
      const newState = { ...state };
      const { unit } = action;
      newState[unit] = action.value;
      return newState;
    }
    default:
      return state;
  }
};

export default valueReducer;
