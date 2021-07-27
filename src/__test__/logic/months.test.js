import newDate from '../../logic/months';

// note: months start at 0 index
describe('newDate', () => {
  it('increments or decriments the current date by one day and return an array with the new date', () => {
    const date = newDate(1, 15, 5, 2021);
    expect(date).toStrictEqual([16, 5, 2021]);
  });
  it('changes to the next month', () => {
    const date = newDate(1, 30, 1, 2021);
    expect(date).toStrictEqual([1, 2, 2021]);
  });
  it('changes to the previous month', () => {
    const date = newDate(-1, 1, 1, 2021);
    expect(date).toStrictEqual([31, 0, 2021]);
  });
  it('changes to the next year', () => {
    const date = newDate(1, 31, 11, 2021);
    expect(date).toStrictEqual([1, 1, 2022]);
  });
  it('changes to the previos year', () => {
    const date = newDate(-1, 1, 0, 2021);
    expect(date).toStrictEqual([31, 11, 2020]);
  });
  it('adds one day to leap years on February', () => {
    const date = newDate(-1, 1, 2, 2020);
    expect(date).toStrictEqual([29, 1, 2020]);
  });
});
