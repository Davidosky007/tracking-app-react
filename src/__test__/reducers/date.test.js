import dateReducer from '../../reducers/dateReducer';
import { changeDate } from '../../actions/index';

const state = {
  date: {
    day: 1,
    month: 1,
    year: 1,
  },
};

describe('dateReducer', () => {
  it('changes the current date', () => {
    const date = {
      day: 16,
      month: 6,
      year: 2021,
    };
    const newState = dateReducer(state, changeDate(date));
    expect(newState).toStrictEqual(date);
  });
  it('returns the same state by default', () => {
    const date = {
      day: 16,
      month: 6,
      year: 2021,
    };
    const action = {
      type: '',
      date,
    };
    const newState = dateReducer(state, action);
    expect(newState).toStrictEqual(state);
  });
  it('does not mutate the previous state', () => {
    const date = {
      day: 16,
      month: 6,
      year: 2021,
    };
    const newState = dateReducer(state, changeDate(date));
    expect(newState).not.toStrictEqual(state);
  });
});
