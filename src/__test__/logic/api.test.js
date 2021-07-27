import { fetchUnits, fetchAllMeasurements } from '../../logic/api';

beforeEach(() => {
  jest.spyOn(global, 'fetch').mockResolvedValue({
    json: jest.fn().mockResolvedValue({
      data: {
        unit1: [{ value: 1 }],
        unit2: [{ value: 2 }],
      },
      units: ['unit1', 'unit2'],
    }),
  });
});

describe('fetchUnits', () => {
  it('returns all the availiable units in an array', async () => {
    const token = '123';
    const units = await fetchUnits(token);
    expect(units).toStrictEqual(['unit1', 'unit2']);
  });
});

describe('fetchAllMeasurements', () => {
  it('returns all the measurements for each unit', async () => {
    const token = '123';
    const measurements = await fetchAllMeasurements(token);
    expect(measurements).toStrictEqual({
      unit1: [{ value: 1 }],
      unit2: [{ value: 2 }],
    });
  });
});
