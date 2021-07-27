import actions, {
  getUnits, getAllMeasurements, addValue, changeDate, changeFilter,
} from '../../actions/index';

const {
  GET_UNITS, GET_MEASUREMENTS, ADD_VALUE, CHANGE_DATE, CHANGE_FILTER,
} = actions;

describe('getUnits', () => {
  it('holds the measurable units in an array', () => {
    const units = ['unit1', 'unit2'];
    const expectation = {
      type: GET_UNITS,
      units,
    };
    expect(getUnits(units)).toStrictEqual(expectation);
  });
});

describe('getAllMeasurements', () => {
  it('holds measurements in an object with the name of the units as keys', () => {
    const measurements = {
      unit1: ['measurement1', 'measurement2'],
      unit2: ['measurement1', 'measurement2'],
    };
    const expectation = {
      type: GET_MEASUREMENTS,
      measurements,
    };
    expect(getAllMeasurements(measurements)).toStrictEqual(expectation);
  });
});

describe('addValue', () => {
  it('holds the values inserted by the user to be added as measurements', () => {
    const unit = 'unit1';
    const value = 1;
    const expectation = {
      type: ADD_VALUE,
      unit,
      value,
    };
    expect(addValue(unit, value)).toStrictEqual(expectation);
  });
});

describe('changeDate', () => {
  it('holds the date as an object', () => {
    const day = 1;
    const month = 2;
    const year = 2021;
    const expectation = {
      type: CHANGE_DATE,
      date: {
        day,
        month,
        year,
      },
    };
    expect(changeDate({ day, month, year })).toStrictEqual(expectation);
  });
});

describe('changeFilter', () => {
  it('holds the filter as a string', () => {
    const filter = 'filter1';
    const expectation = {
      type: CHANGE_FILTER,
      filter,
    };
    expect(changeFilter(filter)).toStrictEqual(expectation);
  });
});
