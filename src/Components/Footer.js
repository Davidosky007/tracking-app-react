/* eslint-disable max-len */
import { useLocation } from 'react-router-dom';
import { logout } from '../logic/sessions';
import Icon from './Icon';

const Footer = () => {
  const handleLogout = () => {
    logout();
  };

  const location = useLocation();
  const path = location.pathname.split('/')[2];
  const hide = path !== 'sign-up';
  const displayLog = hide ? <Icon icon="fas fa-sign-out-alt" path="/users/session" title="Logout" clickHandler={handleLogout} /> : <Icon icon="fas fa-sign-out-alt" path="/users/sign-up" title="Sign Up" />;

  return (
    <footer className="flex fixed footer">
      <Icon icon="fas fa-plus-square" path="/add" title="Add Measure." />
      <Icon icon="fas fa-home" path="/" title="Home" />
      <Icon icon="fas fa-weight" path="/progress" title="Progress" />
      {displayLog}
    </footer>
  );
};

export default Footer;
