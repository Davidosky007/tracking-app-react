import actions from '../actions/index';

const { CHANGE_DATE } = actions;

const dateReducer = (state = [], action) => {
  switch (action.type) {
    case CHANGE_DATE:
      return action.date;
    default:
      return state;
  }
};

export default dateReducer;
