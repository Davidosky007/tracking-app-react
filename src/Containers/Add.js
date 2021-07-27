import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchUnits, saveMeasurement } from '../logic/api';
import { loadToken } from '../logic/storage';
import AddCard from '../Components/AddCard';

const Add = (props) => {
  const {
    units, getUnits, values, addValue,
  } = props;
  useEffect(() => {
    const token = loadToken();
    fetchUnits(token).then((units) => {
      getUnits(units);
    });
  }, []);

  const handleSubmit = (unit, id) => {
    const value = values[unit];
    const token = loadToken();
    saveMeasurement(id, value, token);
    addValue(unit, '');
  };

  const handleChange = (unit, value) => {
    addValue(unit, value);
  };

  const unitList = units.map((unit) => (
    <AddCard
      key={unit.id}
      id={unit.id}
      title={unit.title}
      value={values[unit.title]}
      changeHandler={handleChange}
      submitHandler={handleSubmit}
    />
  ));

  return (
    <div className="add-wrapper p-l-20 p-r-20">{unitList}</div>
  );
};

Add.propTypes = {
  units: PropTypes.arrayOf(PropTypes.object).isRequired,
  getUnits: PropTypes.func.isRequired,
  values: PropTypes.shape({}).isRequired,
  addValue: PropTypes.func.isRequired,
};

export default Add;
