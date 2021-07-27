const getMeasurementsByDate = (measurements, date) => {
  const { day, month, year } = date;
  const measurementsByDate = measurements.filter((m) => {
    const mDate = new Date(m.created_at);
    return (
      mDate.getDate() === day
      && mDate.getMonth() === month
      && mDate.getFullYear() === year);
  });
  return measurementsByDate;
};

const total = (measurements) => {
  const total = measurements.reduce((value, m) => {
    const newValue = m.value + value;
    return newValue;
  }, 0);
  return total;
};

const last = (measurements) => {
  const last = measurements.reduce((l, m) => {
    if (m.created_at > l.created_at) return m;
    return l;
  }, { created_at: '' });
  if (!last.value) return 0;
  return last.value;
};

export { getMeasurementsByDate, total, last };
