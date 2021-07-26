import actions from '../actions/index';

const { GET_MEASUREMENTS } = actions;

const measurementsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_MEASUREMENTS: {
      const newState = { ...state };
      Object.keys(action.measurements).forEach((key) => {
        newState[key] = action.measurements[key];
      });
      return newState;
    }
    default:
      return state;
  }
};

export default measurementsReducer;
