import PropTypes from 'prop-types';

const AddCard = (props) => {
  const {
    id, title, submitHandler, changeHandler, value,
  } = props;

  const handleSubmit = (e, id) => {
    submitHandler(e.target.previousSibling.id, id);
  };

  const handleChange = (e) => {
    changeHandler(e.target.id, e.target.value);
  };

  return (
    <div className="add-card flex space-between align-center m-b-20 p-l-10 p-r-10">
      <div className="color-gray medium input-title flex">{title}</div>
      <input className="input" id={title} type="number" placeholder="0" value={value} onChange={(e) => handleChange(e)} />
      <button className="submit-button color-dark-gray medium" type="submit" onClick={(e) => handleSubmit(e, id)}>+</button>
    </div>
  );
};

AddCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.string,
  submitHandler: PropTypes.func.isRequired,
  changeHandler: PropTypes.func.isRequired,
};

AddCard.defaultProps = {
  value: '',
};

export default AddCard;
