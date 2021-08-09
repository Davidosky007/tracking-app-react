import actions from '../actions/index';

const { GET_MEASUREMENTS } = actions;

const measurementsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_MEASUREMENTS:
      return {
        ...state,
        ...action.measurements,
      };
    default:
      return state;
  }
};

export default measurementsReducer;
