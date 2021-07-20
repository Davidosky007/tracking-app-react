import actions from '../actions/index';

const { CHANGE_FILTER } = actions;

const filterReducer = (state = '', action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default filterReducer;
