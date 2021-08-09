import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

const Icon = (props) => {
  const {
    path, title, clickHandler, icon,
  } = props;

  const location = useLocation();
  const route = location.pathname.split('/')[1];

  const isActive = () => {
    if (`/${route}` === path) return 'blue';
    return 'dark-gray';
  };
  const active = isActive();
  return (
    <Link className={`icon background-${active} color-white`} to={path} onClick={clickHandler}>
      <div>
        <div className={`${icon} big`} />
        <div className="small m-top-10">{title}</div>
      </div>
    </Link>
  );
};

Icon.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  clickHandler: PropTypes.func,
  icon: PropTypes.string.isRequired,
};

Icon.defaultProps = {
  clickHandler: () => {},
};

export default Icon;
