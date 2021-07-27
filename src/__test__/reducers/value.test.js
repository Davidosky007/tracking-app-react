import valueReducer from '../../reducers/values';
import { addValue } from '../../actions/index';

const state = {
  values: {},
};

describe('valueReducer', () => {
  it('changes the values property of the state', () => {
    const unit = 'unit1';
    const value = 1;
    const newState = valueReducer(state, addValue(unit, value));
    expect(newState.unit1).toBe(1);
  });
  it('return the smae state by default', () => {
    const unit = 'unit1';
    const value = 1;
    const action = {
      type: '',
      unit,
      value,
    };
    const newState = valueReducer(state, action);
    expect(newState).toStrictEqual(state);
  });
  it('does not mutate the previous state', () => {
    const unit = 'unit1';
    const value = 1;
    const newState = valueReducer(state, addValue(unit, value));
    expect(newState).not.toStrictEqual(state);
  });
});
