import { MEASURE_DATA } from "../actions";

const measureReducer = (state = {}, action) => {
  switch (action.type) {
    case MEASURE_DATA:
      return action.payload;

    default:
      return state;
  }
};

export default measureReducer;
