const checkLeapYear = (year) => {
  if (year % 2 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return 1;
      }
      return 0;
    }
    return 1;
  }
  return 0;
};

const getMonths = (leapYear) => {
  const months = [
    {
      full: 'January',
      days: 31,
    },
    {
      full: 'February',
      days: 28 + leapYear,
    },
    {
      full: 'March',
      days: 31,
    },
    {
      full: 'April',
      days: 30,
    },
    {
      full: 'May',
      days: 31,
    },
    {
      full: 'June',
      days: 30,
    },
    {
      full: 'July',
      days: 31,
    },
    {
      full: 'August',
      days: 31,
    },
    {
      full: 'September',
      days: 30,
    },
    {
      full: 'October',
      days: 31,
    },
    {
      full: 'November',
      days: 30,
    },
    {
      full: 'December',
      days: 31,
    },
  ];
  return months;
};

const newDate = (dir, day, month, year) => {
  const leapYear = checkLeapYear(year);
  const months = getMonths(leapYear);
  let newDay = day + dir;
  let newMonth = month;
  let newYear = year;
  if (newDay <= 0) {
    newMonth -= 1;
    if (newMonth < 0) { newMonth = 11; newYear -= 1; }
    newDay = months[newMonth].days;
  }
  if (newDay > months[newMonth].days) {
    newDay = 1;
    newMonth += 1;
    if (newMonth > 11) { newMonth = 1; newYear += 1; }
  }
  return [newDay, newMonth, newYear];
};

export { getMonths };
export default newDate;
