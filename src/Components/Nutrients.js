import PropTypes from 'prop-types';
import { icons, measurementUnits } from '../logic/info';

const Nutrient = (props) => {
  const {
    unit, measurements, getMeasurementsByDate, reduceMethod, selectedDate,
  } = props;
  const measurementsByDate = getMeasurementsByDate(measurements, selectedDate);
  const displayedValue = reduceMethod(measurementsByDate);

  return (
    <div className="flex nutrient center p-l-20 p-r-20 m-b-50">
      <div className={`${icons[unit]} n-icon x-big color-blue text-center`} />
      <div className="n-details m-l-20">
        <div className="color-gray overflow-hidden">{unit}</div>
        <div className="color-gray m-big">
          {displayedValue}
          <span className="x-small">{`(${measurementUnits[unit]})`}</span>
        </div>
      </div>
    </div>
  );
};

Nutrient.propTypes = {
  unit: PropTypes.string.isRequired,
  measurements: PropTypes.arrayOf(PropTypes.object).isRequired,
  getMeasurementsByDate: PropTypes.func.isRequired,
  reduceMethod: PropTypes.func.isRequired,
  selectedDate: PropTypes.shape({}).isRequired,
};

export default Nutrient;
