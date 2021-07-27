import { changeFilter } from '../../actions/index';
import filterReducer from '../../reducers/filter';

const state = {
  filter: '',
};

describe('filterReducer', () => {
  it('changes the filter in the state', () => {
    const filter = 'newFilter';
    const newState = filterReducer(state, changeFilter(filter));
    expect(newState).toBe('newFilter');
  });
  it('return the same state by default', () => {
    const filter = 'newFilter';
    const action = {
      type: '',
      filter,
    };
    const newState = filterReducer(state, action);
    expect(newState).toStrictEqual(state);
  });
  it('does not mutate the previous state', () => {
    const filter = 'newFilter';
    const newState = filterReducer(state, changeFilter(filter));
    expect(state.filter).not.toBe(newState);
  });
});
