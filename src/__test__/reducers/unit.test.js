import unitReducer from '../../reducers/unitReducer';
import { getUnits } from '../../actions/index';

const state = {
  units: [],
};

describe('unitReducer', () => {
  it('changes the units property of the state', () => {
    const units = ['unit1', 'unit2'];
    const newState = unitReducer(state, getUnits(units));
    expect(newState).toStrictEqual(units);
  });
  it('return the same state by default', () => {
    const units = ['unit1', 'unit2'];
    const action = {
      type: '',
      units,
    };
    const newState = unitReducer(state, action);
    expect(newState).toStrictEqual(state);
  });
  it('does not mutate the previous state', () => {
    const units = ['unit1', 'unit2'];
    const newState = unitReducer(state, getUnits(units));
    expect(newState).not.toStrictEqual(state.units);
  });
});
