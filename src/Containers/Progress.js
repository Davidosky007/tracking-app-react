import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { loadToken } from '../logic/storage';
import { fetchAllMeasurements } from '../logic/api';
import { getMonths } from '../logic/months';
import { measurementUnits, options } from '../logic/info';

const Progress = (props) => {
  const {
    measurements, getAllMeasurements, filter, changeFilter, //eslint-disable-line
  } = props;
  useEffect(() => {
    const token = loadToken();
    fetchAllMeasurements(token).then((data) => {
      getAllMeasurements(data);
    });
  }, []);
  const months = getMonths(0);
  const select = options.map((option) => (
    <option key={option}>{option}</option>
  ));

  const handleFilterChange = (e) => {
    changeFilter(e.target.value);
  };

  const list = measurements[filter].map((m) => {
    if (m.value === 0) return [];
    const date = new Date(m.created_at);
    const day = date.getDate();
    const month = date.getMonth() || 0;
    const year = date.getFullYear();
    return (
      <div className="m-b-10" key={`p${m.id}`}>
        <p className="color-dark-gray medium">{`${day} ${months[month].full} ${year}`}</p>
        <p className="color-gray small">{`${m.value} (${measurementUnits[filter]})`}</p>
      </div>
    );
  });

  return (
    <div className="p-l-20 p-r-20 progress">
      <div className="m-b-20">
        <select className="options background-blue color-white" onChange={(e) => handleFilterChange(e)} value={filter}>{select}</select>
      </div>
      <div>{list}</div>
    </div>
  );
};

Progress.propTypes = {
  filter: PropTypes.string.isRequired,
  measurements: PropTypes.shape({}).isRequired,
  getAllMeasurements: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

export default Progress;
