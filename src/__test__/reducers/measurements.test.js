import { getAllMeasurements } from '../../actions/index';
import measurementsReducer from '../../reducers/measurementsReducer';

const state = {
  measurements: {
    Weight: [{ value: 0 }],
    Energy: [{ value: 0 }],
    'Energy burned': [{ value: 0 }],
    Sugar: [{ value: 0 }],
    Fats: [{ value: 0 }],
    Water: [{ value: 0 }],
    Protein: [{ value: 0 }],
    Carbonhydrates: [{ value: 0 }],
    'Saturated fats': [{ value: 0 }],
  },
};
describe('measurementsReducer', () => {
  it('changes the measurements property in the state', () => {
    const measurements = {
      Weight: [{ value: 1 }],
    };
    const newState = measurementsReducer(state, getAllMeasurements(measurements));
    expect(newState.Weight).toStrictEqual([{ value: 1 }]);
  });
  it('return the same state by default', () => {
    const measurements = {
      Weight: [{ value: 1 }],
    };
    const action = {
      type: '',
      measurements,
    };
    const newState = measurementsReducer(state, action);
    expect(newState).toStrictEqual(state);
  });
  it('does not mutate the previous state', () => {
    const measurements = {
      Weight: [{ value: 1 }],
    };
    const newState = measurementsReducer(state, getAllMeasurements(measurements));
    expect(newState.Weight).not.toStrictEqual(state.Weight);
  });
});
